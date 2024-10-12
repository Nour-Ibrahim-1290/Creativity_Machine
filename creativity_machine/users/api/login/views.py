from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ...models import User
from ..utils import generate_tokens


class LoginView(APIView):
    """Login Process."""
    def post(self, request):
        """Log in a user."""
        email = request.data['email']
        password = request.data['password']

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'Invalid Email'}, status=status.HTTP_401_UNAUTHORIZED)
        
        if user.check_password(password):
            response_data = generate_tokens(user)
            return Response(response_data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid Password'}, status=status.HTTP_401_UNAUTHORIZED)