from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..serializers import UserSerializer




class UpdateUserView(APIView):
    """Update User Profile."""

    def put(self, request, format=None):
        """Update a user profile."""
        try:
            user = self.request.user

            User.objects.filter(id=user.id).update(**request.data)

            user = User.objects.get(id=user.id)
            user_serializer = UserSerializer(user)

            return Response({ 
                'profile': user_serializer.data, 
                'email': str(user.email) },
                status=status.HTTP_200_OK)
        except:
            return Response({'error': 'Error Updating Profile'}, status=status.HTTP_401_UNAUTHORIZED)
        # user_serializer = UserSerializer(user, data=request.data, partial=True)
        # if user_serializer.is_valid():
        #     user_serializer.save()
        #     return Response(user_serializer.data, status=status.HTTP_200_OK)
        # else:
        #     return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
