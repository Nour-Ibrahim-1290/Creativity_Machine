from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator

from ...models import User
from ..serializers import UserSerializer


@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    """Login Process."""
    permission_classes  = (permissions.AllowAny, )
    
    def post(self, request, format=None):
        """Log in a user."""
        email = request.data['email']
        password = request.data['password']

        try:
            user = authenticate(email=email, password=password)
            if user is not None:
                login(request, user)
                return Response({'success': 'User logged in', 'email': email }, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        except:
            return Response({'error': 'Invalid Credentials Process'}, status=status.HTTP_401_UNAUTHORIZED)
