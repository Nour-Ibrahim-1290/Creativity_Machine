from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie

from users.models import User
from .serializers import UserSerializer



@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'success': 'CSRF Cookie set' })


@method_decorator(csrf_protect, name='dispatch')
class checkAuthenticatedView(APIView):
    def get(self, request, format=None):
        try:
            IsAuthenticated = User.is_authenticated

            if IsAuthenticated:
                return Response({'isAuthenticated': 'success'})
            else:
                return Response({'isAuthenticated': 'error' })
        except:
            return Response({'error': 'Invalid Authentication'}, status=status.HTTP_401_UNAUTHORIZED)



class GetUsersView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        try:
            users = User.objects.all()

            users = UserSerializer(users, many=True)
            return Response(users.data)
        except:
            return Response({'error': 'Errror Retrieving Profiles'}, status=status.HTTP_401_UNAUTHORIZED)


class GetUserView(APIView):

    def get(self, request, format=None):
        try:
            user = self.request.user

            user = User.objects.get(id=user.id)

            user = UserSerializer(user)

            return Response({'profile': user.data, 'email': str(user.email)})
        except:
            return Response({'error': 'Error Retrieving Profile'}, status=status.HTTP_401_UNAUTHORIZED)