from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer

def generate_tokens(user):
    """
    Generate JWT tokens for a user.

    Args:
        user: User instance.
    
    Returns:
        response_data (dict): A dictionary containing user data and JWT tokens.
    """
    refresh = RefreshToken.for_user(user)
    
    token_data = {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

    # Serialize the user data
    user_data = UserSerializer(user).data

    response_data = {
        'username': user_data['name'],
        'userdata': user_data, 
        'token': token_data
    }

    return response_data