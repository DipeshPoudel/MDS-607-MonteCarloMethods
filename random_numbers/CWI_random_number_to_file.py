seed=1982537
random_numbers = []
for i in range(100):
    ran=(16807*seed)%((2**31)-1)
    random_numbers.append(str(ran))
    seed = ran

# print(','.join(random_numbers))
with open('single_random_numbers.txt','w') as fh:
    fh.write('\n'.join(random_numbers))
