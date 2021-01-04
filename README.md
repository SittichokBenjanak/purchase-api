# วิธีติดตั้ง
1. git clone https://github.com/SittichokBenjanak/purchase-api.git
2. cd purchase-api
3. npm install
4. npm run dev
# วิธีใช้งาน API
POST http://localhost:4000/order<br>
body: <br>
{<br>
	"item_list":[<br>
			{"id":"1", "qty":10, "price_per_item":3, "discount":"10%"},<br>
			{"id":"2", "qty":2, "price_per_item":3, "discount":"1%"},<br>
			{"id":"3", "qty":3, "price_per_item":4, "discount":"5%"},<br>
			{"id":"4", "qty":6, "price_per_item":2, "discount":"2%"},<br>
			{"id":"5", "qty":1, "price_per_item":100, "discount":"3%"}<br>
	],<br>
	"total_discount": "10%",<br>
	"payment": "500"<br>
}
