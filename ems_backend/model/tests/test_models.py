from django.test import TestCase

from ..models import Department, Employee


class TestModel(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.department = Department.objects.create(
            name="Mathematics"
        )

    def test_it_has_information_fields(self):
        self.assertIsInstance(self.department.name, str)

    def test_should_create_department(self):
        department = Department.objects.create(name="Computer Science")
        department.save()

        self.assertEqual(str(department), '2-Computer Science')

        employee = Employee.objects.create(name="Geri Nika", department=department)
        employee.save()

        self.assertEqual(str(employee), '1-Geri Nika', '2-Computer Science')
