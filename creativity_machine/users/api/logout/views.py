from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class LogoutView(APIView):
    """Logout Process."""
    def post(self, request):
        """Log out the user."""
        if 'user' in request.session:
            del request.session['user']
            request.session.save()
            return Response({"detail": "Successfully logged out."}, status=status.HTTP_200_OK)
        else:
            return Response({"detail": "No active session found."}, status=status.HTTP_400_BAD_REQUEST)