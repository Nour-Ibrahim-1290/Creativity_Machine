from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.middleware.csrf import get_token



# Logout View (clear session for the current user)
class LogoutView(APIView):
    """Logout Process."""
    def post(self, request, format=None):
        """Log out the user."""

        try:
            auth.logout(request)
            return Response({'success': 'User logged out'}, status=status.HTTP_200_OK)
        except:
            return Response({'error': 'No active session found'}, status=status.HTTP_400_BAD_REQUEST)
        # print("Logging out")
        # print(request.session.items())
        # if request.user.is_authenticated:
        #     print("User Sessioon authenticated")
        #     logout(request)
        #     return Response({"detail": "Successfully logged out."}, status=status.HTTP_200_OK)
        # else:
        #     return Response({"detail": "No active session found."}, status=status.HTTP_400_BAD_REQUEST)