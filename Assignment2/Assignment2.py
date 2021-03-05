def calculate(min, max):
    sum = 0
    for i in range(min,max+1):
        sum+=i
    print(sum)
calculate(1,3)
calculate(4,8)

def avg(data):
    sum = 0
    for employee in data["employees"]:
        sum+=employee["salary"]
    print(sum/data["count"])
avg({
    "count":3,
    "employees":[
        {"name":"John", "salary":30000},
        {"name":"Bob", "salary":60000},
        {"name":"Jenny", "salary":50000}
    ]
})

def maxProduct(nums):
    pos_1=0
    pos_2=0
    nag_1=0
    nag_2=0
    for i in nums:
        if i >= 0:
            if i>= pos_1:
                pos_2 = pos_1
                pos_1 = i
            elif i>= pos_2:
                pos_2 = i
        else:
            if i<= nag_1:
                nag_2 = nag_1
                nag_1 = i
            elif i<= nag_2:
                nag_2 = i
    if pos_2==0 and nag_2==0:
        print(pos_1*nag_1)
    else:
        pos_m = pos_1*pos_2
        nag_m = nag_1*nag_2
        if pos_m >= nag_m:
            print(pos_m)
        else:
            print(nag_m)
maxProduct([5,20,2,6])
maxProduct([10,-20,0,3])
#maxProduct([-2,10])

def twoSum(nums, target):
    index_1=0
    for i in nums:
        another = target-i
        index_2=index_1+1
        for j in nums[index_1+1:]:
            if j == another:
                return([index_1, index_2])
            index_2+=1      
        index_1+=1        
result=twoSum([2, 11, 7, 15], 9)
print(result)

def maxZeros(nums):
    max_counts=0
    this_round_counts=0
    for i in nums:
        if i==0:
            this_round_counts+=1
        else:
            if this_round_counts>max_counts:
                max_counts=this_round_counts
                this_round_counts=0
    if this_round_counts>max_counts:
        max_counts=this_round_counts
    print(max_counts)
maxZeros([0,1,0,0])
maxZeros([1,0,0,0,0,1,0,1,0,0])
maxZeros([1,1,1,1,1])
