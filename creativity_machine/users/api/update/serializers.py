from rest_framework import serializers


# Reset Password Resquest
class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()



# Password Resetting action
class PasswordResetConfirmSerializer(serializers.Serializer):
    new_password = serializers.CharField(write_only=True, required=True)
    uidb64 = serializers.CharField(write_only=True, required=True)
    token = serializers.CharField(write_only=True, required=True)