from enum import unique
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

class MyUserManager(BaseUserManager):
    def create_user(self, name, email, password=None, age=None, phone=None, gender=None, country=None, city=None, IQ=None, is_admin=False):
        if not name:
            raise ValueError('Users must have a name')
        
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            name=name,
            email=email,
            password=password,
            age=age,
            phone=phone,
            gender=gender,
            country=country,
            city=city,
            IQ=IQ,
            is_admin=is_admin,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, name, email, password):
        user = self.create_user(
            name=name,
            email=email,
            password=password,
        )
        # self.is_admin = True
        user.admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    USER_GENDER_CHOICES = (
        ('male', 'male'),
        ('female', 'female'),
    )

    ACCOUNT_STATE_CHOICES = (
        ('initial', 'initial'),
        ('completed', 'completed'),
    )


    name = models.CharField(max_length=255, null=False)
    email = models.EmailField(max_length=255, unique=True, null=False)
    phone = models.CharField(max_length=20, null=True, blank=True)
    password = models.CharField(max_length=255, null=False)
    country = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    IQ = models.CharField(max_length=10, null=True, blank=True)
    age = models.IntegerField(null=True, blank=True, default=0)
    gender = models.CharField(max_length=255, choices=USER_GENDER_CHOICES, null=True)
    account_state = models.CharField(max_length=255, choices=ACCOUNT_STATE_CHOICES, default='initial')
    is_admin = models.BooleanField(default=False)

    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.name

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin