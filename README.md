Тестовое задание на express/vue

# API Документация: Заказы и Аналитика

## Общая информация
- Все даты передаются в формате **ISO string** (`YYYY-MM-DDTHH:mm:ss.sssZ`).

## Эндпоинты

### 1. Создать заказ
**POST** `/orders`

**Пример запроса (curl):**
```bash
curl -X POST http://localhost:3000/orders   -H "Content-Type: application/json"   -d '{
    "customerId": 123,
    "items": [
      { "productId": 1, "quantity": 2, "price": 100 },
      { "productId": 2, "quantity": 1, "price": 250 }
    ]
  }'
```

**Успешный ответ (201):**
```json
{
  "message": "Order created",
  "orderId": 5
}
```

---

### 2. Получить заказ по ID
**GET** `/orders/:id`

**Пример запроса (curl):**
```bash
curl http://localhost:3000/orders/5
```

**Успешный ответ (200):**
```json
{
  "items": [
    { "productId": 1, "quantity": 2, "price": 100 },
    { "productId": 2, "quantity": 1, "price": 250 }
  ],
  "totalSum": 450,
  "isBigOrder": false
}
```

**Ошибка (404):**
```json
{
  "message": "Order not found"
}
```

---

### 3. Получить все заказы
**GET** `/orders`

**Пример запроса (curl):**
```bash
curl http://localhost:3000/orders
```

**Успешный ответ (200):**
```json
{
  "data": [
    {
      "id": 1,
      "customerId": 123,
      "items": [
        { "productId": 1, "quantity": 2, "price": 100 }
      ],
      "createdAt": "2025-09-26T18:44:00.000Z"
    }
  ]
}
```

---

### 4. Еженедельная аналитика
**GET** `/analytics/weekly`

**Пример запроса (curl):**
```bash
curl http://localhost:3000/analytics/weekly
```

**Успешный ответ (200):**
```json
{
  "ordersCount": 10,
  "totalAmount": 4500,
  "bigOrdersCount": 2,
  "uniqueCustomers": 7
}
```

**Поля ответа:**
- `ordersCount` — количество заказов  
- `totalAmount` — общая сумма всех заказов  
- `bigOrdersCount` — количество "крупных" заказов  
- `uniqueCustomers` — количество уникальных клиентов  

---

Получение заказов:
<img width="1175" height="580" alt="image" src="https://github.com/user-attachments/assets/d3d56f0e-7a9f-4264-8f43-17feb4b8e834" />

Получение заказа по ID:
<img width="389" height="563" alt="image" src="https://github.com/user-attachments/assets/9b682fae-296a-454d-b4f2-0ffdc398ae43" />
<img width="1172" height="454" alt="image" src="https://github.com/user-attachments/assets/7827641d-ebd3-451a-912b-b102983ac8b3" />

Создание заказа:
<img width="525" height="514" alt="image" src="https://github.com/user-attachments/assets/d5b52e01-19fa-404d-b3fa-0728cadd3cff" />

Аналитика за неделю
<img width="428" height="455" alt="image" src="https://github.com/user-attachments/assets/70eb9c7e-4e97-4986-a99c-dec97e145e7a" />
<img width="1171" height="482" alt="image" src="https://github.com/user-attachments/assets/ba597426-4aed-4fc7-8aab-e1c808019668" />

