seed=1982537
for i in range(100):
    ran=(16807*seed)%((2**31)-1)
    seed = ran
    print(ran)