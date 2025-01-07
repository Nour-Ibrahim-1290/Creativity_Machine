from rest_framework.views import APIView
from rest_framework.response import Response
from users.models import User


class DeleteUserView(APIView):
    """Delete a user"""
    def delete(self, request, format=None, *args, **kwargs):
        try:
            user = self.request.user

            user = User.objects.filter(id=user.id).first()
            user.delete()
            return Response({ 'success', 'User deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except:
            return Response({'error': 'Error Deleting Profile'}, status=status.HTTP_401_UNAUTHORIZED)