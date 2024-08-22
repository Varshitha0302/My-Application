# myapp/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class DataView(APIView):
    def get(self, request):
        return Response({'message': 'Hello from Django!'}, status=status.HTTP_200_OK)

