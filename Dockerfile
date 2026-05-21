FROM python:3.10-slim

# Thiết lập thư mục làm việc
WORKDIR /app

# Cài đặt các thư viện hệ thống cần thiết cho ML (CatBoost, XGBoost)
RUN apt-get update && apt-get install -y \
    build-essential \
    libgomp1 \
    && rm -rf /var/lib/apt/lists/*

# Copy file requirements vào container
COPY requirements.txt .

# Cài đặt các thư viện python
RUN pip install --no-cache-dir -r requirements.txt

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 5000 cho Flask
EXPOSE 5000

# Lệnh chạy ứng dụng
CMD ["python3", "app.py"]
