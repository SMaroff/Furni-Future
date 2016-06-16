from django.contrib import admin

# Register your models here.
from .models import UserStripe, EmailConfirmed, EmailMarketingSignUp, UserAddress, UserDefaultAddress


class UserAddressAdmin(admin.ModelAdmin):
	class Meta:
		model = UserAddress

admin.site.register(UserAddress, UserAddressAdmin)



class EmailMarketingSignUpAdmin(admin.ModelAdmin):
	list_display = ['__unicode__', 'timestamp']
	class Meta:
		model = EmailMarketingSignUp


#admin.site.register(EmailMarketingSignUp, EmailMarketingSignUpAdmin)