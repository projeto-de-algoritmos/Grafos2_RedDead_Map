FROM python:3-alpine

COPY api /api

WORKDIR /api

RUN pip install -r requirements.txt

CMD ["python3", "main.py"]