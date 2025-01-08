from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie

from users.models import User
from .serializers import UserSerializer



@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'success': 'CSRF Cookie set' })



class checkAuthenticatedView(APIView):
    """Check User Authentication"""
    def get(self, request, format=None):
        user = self.request.user

        try:
            IsAuthenticated = user.is_authenticated

            if IsAuthenticated:
                return Response({'isAuthenticated': 'success'})
            else:
                return Response({'isAuthenticated': 'error' })
        except:
            return Response({'error': 'Invalid Authentication'}, status=status.HTTP_401_UNAUTHORIZED)



class GetUsersView(APIView):
    """GET All Users"""
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        try:
            users = User.objects.all()

            users = UserSerializer(users, many=True)
            return Response(users.data)
        except:
            return Response({'error': 'Errror Retrieving Profiles'}, status=status.HTTP_401_UNAUTHORIZED)


class GetUserView(APIView):
    """GET User Profile"""
    def get(self, request, format=None):
        try:
            user = self.request.user

            user_serializer = UserSerializer(user)

            return Response({'profile': user_serializer.data, 'email': str(user.email)})
        except:
            return Response({'error': 'Error Retrieving Profile'}, status=status.HTTP_401_UNAUTHORIZED)