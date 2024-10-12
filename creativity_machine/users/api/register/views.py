from django.shortcuts import redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..serializers import UserSerializer
from ...models import User
from ..utils import generate_tokens



# Register View (crreate session for the current user)
class RegisterView(APIView):
    """Registerations Process."""
    def post(self, request):
        """Create a new user."""

        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            request.session['user'] = user.id
            request.session.save()
            #print(user.id)

            # Generate tokens for the user
            response_data = generate_tokens(user)
            return Response(response_data, status=status.HTTP_201_CREATED)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

