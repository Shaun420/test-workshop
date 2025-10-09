# def hello(name):
# 	print(f"Hello {name}")
# hello("shaunak") # Hello shaunak

# def sum(a, b):
# 	return a + b

# print(sum(34, 11)) # 45

# def simple_interest():
# 	p = int(input('Enter the amount'))
# 	r = float(input("Enter the rate of interest: "))
# 	t = int(input("Enter the duration: "))
# 	interest = p * r * t / 100
# 	print("Simple interest:", interest)
# simple_interest()

# def sumall(*args):
# 	print(args)
# 	total = sum(args)
# 	# print("Sum:", total)
# 	return total

# print(sumall(5, 11, 9, 65))

# def say_report(name, **options):
# 	math = options["math"]
# 	science = options["science"]
# 	total = math + science
# 	print(f"{name} got total marks: {total}")
# 	print(options)

# say_report("jaya", math=20, science=50, hobby="signing")

def sum(a, b=2, c=3):
	return a + b + c

print(sum(2, 4))

total = lambda a, b: a + b
print(total(5, 3))
