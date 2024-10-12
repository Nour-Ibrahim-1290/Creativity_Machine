from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from ..serializers import UserSerializer




class UpdateView(APIView):
    """Update User Profile."""
    permission_classes = [IsAuthenticated]

    def post(self, request):
        """Update a user profile."""
        user = request.user
        
        user_serializer = UserSerializer(user, data=request.data, partial=True)

        if user_serializer.is_valid():
            user_serializer.save()
            return Response(user_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
