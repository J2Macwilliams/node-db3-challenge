-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select p.productName as ProductName
, c.categoryName as CategoryName
from product as p
join category as c
on p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select o.id
, s.companyName
from [order] as o
join shipper as s
on o.ShipVia = s.id
where o.OrderDate < '2012-08-08';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select p.productName as name
,o.quantity
from orderDetail as o
join product as p
on o.productId = p.id
where o.orderId = 10251
order by p.productName
limit 3;


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select o.id as Order_Id
, c.companyName as Customer_Company_Name
,e.LastName as Employee_Last_Name
from [order] as o 
join customer as c 
    on o.customerId = c.id 
join employee as e 
    on o.employeeId = e.id;


-- Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

select distinct c.categoryName
,  p.categoryID as count
from categories as c
join products as p
on c.categoryid = p.categoryId
where c.categoryid = p.categoryId;


-- Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

select distinct o.orderID
, sum(p.categoryId = o.productId) as ItemCount
from orderDetails as o 
join products as p 
on o.productId = p.productId;
