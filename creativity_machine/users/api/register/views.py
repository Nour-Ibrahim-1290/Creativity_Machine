from django.shortcuts import redirect

from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator


from ..serializers import UserSerializer
from ...models import User



@method_decorator(csrf_protect, name='dispatch')
class RegisterView(APIView):
    """Registerations Process."""
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        """Create a new user."""

        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            return Response({ 'success': 'User Registered Successfully'}, status=status.HTTP_201_CREATED)

        else:
            return Response({'error': serializer.errors},status=status.HTTP_400_BAD_REQUEST)


