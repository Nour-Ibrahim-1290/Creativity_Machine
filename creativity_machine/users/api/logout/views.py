from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib import auth

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie



@method_decorator(ensure_csrf_cookie, name='dispatch')
class LogoutView(APIView):
    """Logout Process."""
    def post(self, request, format=None):
        """Log out the user."""
        try:
            print("Logging out")
            auth.logout(request)
            return Response({'success': 'User logged out'}, status=status.HTTP_200_OK)
        except:
            return Response({'error': 'No active session found'}, status=status.HTTP_400_BAD_REQUEST)
