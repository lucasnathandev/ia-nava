a = 5
b = 4
nome = 'Lucas'
print(nome)
carros = ['Ford', 'FIAT', 'Chevrolet']

print(len(carros))

if a == b:
    print('a é igual a b')
else:
    print('a é diferente de b')

for n in range(5):
    print('Isso é um laço de 5 interações:', n)

print(type(a), type(nome), type(carros))

# Unpacking collections(destructuring) com python
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits

print(x)
print(y)
print(z)
