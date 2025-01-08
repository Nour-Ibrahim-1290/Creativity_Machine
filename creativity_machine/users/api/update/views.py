from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions

from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.contrib.auth.tokens import default_token_generator
from creativity_machine.settings import DEFAULT_FROM_EMAIL

from users.models import User
from ..serializers import UserSerializer
from .serializers import PasswordResetSerializer, PasswordResetConfirmSerializer


import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()


class UpdateUserView(APIView):
    """Update User Profile."""

    def put(self, request, format=None):
        """Update a user profile."""
        try:
            user = self.request.user

            User.objects.filter(id=user.id).update(**request.data)

            user = User.objects.get(id=user.id)
            user_serializer = UserSerializer(user)

            return Response({ 
                'profile': user_serializer.data, 
                'email': str(user.email) },
                status=status.HTTP_200_OK)
        except:
            return Response({'error': 'Error Updating Profile'}, status=status.HTTP_401_UNAUTHORIZED)
        # user_serializer = UserSerializer(user, data=request.data, partial=True)
        # if user_serializer.is_valid():
        #     user_serializer.save()
        #     return Response(user_serializer.data, status=status.HTTP_200_OK)
        # else:
        #     return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class PasswordResetView(APIView):
    """Reset Password Request"""
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        serializer = PasswordResetSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            try:
                user = User.objects.get(email=email)
                token = default_token_generator.make_token(user)
                uid = urlsafe_base64_encode(force_bytes(user.pk))
                reset_url = f"{os.getenv('FRONT_SERVER_URL')}/reset-password/{uid}/{token}/"
                message = render_to_string('password_reset_email.html', {
                    'user': user,
                    'reset_url': reset_url,
                })
                send_mail(
                    'Password Reset Request',
                    message,
                    DEFAULT_FROM_EMAIL,
                    [user.email],
                    fail_silently=False,
                )
                return Response({'success': 'Password reset email sent'}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({'error': 'User with this email does not exist'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# Password Reset Confirm
class PasswordResetConfirmView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        serializer = PasswordResetConfirmSerializer(data=request.data)
        if serializer.is_valid():
            uidb64 = serializer.validated_data['uidb64']
            token = serializer.validated_data['token']
            new_password = serializer.validated_data['new_password']

            try:
                uid = force_str(urlsafe_base64_decode(uidb64))
                user = User.objects.get(pk=uid)

                if default_token_generator.check_token(user, token):
                    user.set_password(new_password)
                    user.save()
                    return Response({'success': 'Password has been reset successfully'}, status=status.HTTP_200_OK)
                else:
                    return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
            except (TypeError, ValueError, OverflowError, User.DoesNotExist):
                return Response({'error': 'Invalid user'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
