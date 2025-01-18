# backend/Dockerfile
# Faraz: This file is not being used
FROM public.ecr.aws/sam/build-python3.10:latest

WORKDIR /var/task
COPY . .

EXPOSE 3000 8080

# Install Python dependencies (if any)
RUN pip install --no-cache-dir -r requirements.txt && echo "Dependencies installed successfully"
CMD ["sam", "local", "start-api", "--host", "0.0.0.0", "--port", "3000"]
