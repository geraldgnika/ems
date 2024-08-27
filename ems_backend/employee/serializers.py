from rest_framework import serializers

from model.models import Department, Employee


class MiniEmployeeSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()


class DepartmentSerializer(serializers.ModelSerializer):
    # employees = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    employees = MiniEmployeeSerializer(many=True, read_only=True)

    class Meta:
        model = Department
        fields = ('id',
                  'name',
                  'employees')


# Does not require a profile picture
class EmployeeSerializer(serializers.ModelSerializer):
    department = serializers.SlugRelatedField(queryset=Department.objects.all(), slug_field="name")

    class Meta:
        model = Employee
        fields = ('name',
                  'created_at',
                  'department')


# Only for GET Method
class DepartmentGetSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=100)

    employees = MiniEmployeeSerializer(many=True, read_only=True)

    class Meta:
        fields = ('id',
                  'name',
                  'employees')


# Only for GET Method
class EmployeeGetSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=100)
    created_at = serializers.DateField()
    profile_photo = serializers.CharField(max_length=100)
    # department = serializers.CharField(max_length=100)

    department = serializers.SlugRelatedField(queryset=Department.objects.all(), slug_field="name")

    class Meta:
        fields = ('id',
                  'name',
                  'created_at',
                  'profile_photo',
                  'department')


# Requires a profile picture
class EmployeeUpdateSerializer(serializers.ModelSerializer):
    department = serializers.SlugRelatedField(queryset=Department.objects.all(), slug_field="name")

    class Meta:
        model = Employee
        fields = ('id',
                  'name',
                  'created_at',
                  'profile_photo',
                  'department')
