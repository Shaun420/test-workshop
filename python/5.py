# mylist = ["groceries", "food", "bills"]
# numlist = [1, 2, 4, 2]

# mixedList = ["abc", 123, "def", 456]
# mylist[2] = "electricity bill"
# print(mylist)
# mylist.append("fuel")
# print(mylist)
# e = mylist.pop()
# print("popped:", e)
# print(mylist)

# mylist.insert(2, "fuel again")
# mylist.remove("groceries")
# print(mylist)
# print(len(mylist))

# num_list = [1, 2, 3, 4, 5]
# for num in num_list:
# 	if num > 2:
# 		print(num, "is greater than 2")
# 		print(num)

# item_list = ["pen", 'pencil', "marker"]
# money_spent = [10, 5, 25]
# total_money_spent = 0
# total_money_spent = sum(money_spent)
# print("Total money:", total_money_spent)

money_list = [100, 304, 545, 344, 344]
total_money_spent = sum(money_list)
discount = 0
regular_customer = 0.15
normal_customer = 0.1
customer = input("Which type of customer are you: ")
customer = customer.lower()
if (customer == "regular"):
	discount = total_money_spent * regular_customer
	print("Total bill: ", total_money_spent - discount)
elif (customer == "normal"):
	discount = total_money_spent * normal_customer
	print("Total bill: ", total_money_spent - discount)
else:
	print("Invalid customer")

