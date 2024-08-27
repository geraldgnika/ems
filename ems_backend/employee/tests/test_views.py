from django.test import TestCase
from django.urls import reverse


class DepartmentIndexViewTests(TestCase):
    def test_no_department(self):
        response = self.client.get(reverse('employee_api:list-departments'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "")
        self.assertQuerysetEqual(response.context['latest_department_list'], [])


class EmployeeIndexViewTests(TestCase):
    def test_no_employee(self):
        response = self.client.get(reverse('employee_api:list-departments'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "")
        self.assertQuerysetEqual(response.context['latest_employee_list'], [])
