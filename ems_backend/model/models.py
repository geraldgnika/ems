from django.db import models


class Department(models.Model):
    class Meta:
        ordering = ["-name"]

    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.id}-{self.name}'


class Employee(models.Model):
    class Meta:
        ordering = ["-name"]

    name = models.CharField(max_length=100)
    created_at = models.DateField(auto_now_add=True)
    profile_photo = models.CharField(default="default-user-profile-picture.PNG", editable=True, blank=True,
                                     max_length=100)
    department = models.ForeignKey(Department, related_name="employees", on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id}-{self.name}'
