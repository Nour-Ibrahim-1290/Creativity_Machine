from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ...models import User
from ..utils import generate_tokens
from ..serializers import UserSerializer


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
            # Serialize user data
            user_data = UserSerializer(user).data
            # Generate tokens for the user
            tokens = generate_tokens(user)
            # Combine user data and tokens in the response
            response_data = {
                'user': user_data,
                'tokens': tokens
            }
            return Response(response_data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid Password'}, status=status.HTTP_401_UNAUTHORIZED)