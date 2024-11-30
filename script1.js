from random import randint
def guess_game():
    number = randint(1,500)
    attempts = 0
    print("哟西welcome to the gaaaameeeee")
    while True:
        try:
            guess = int(input("guess a number between 1 and 500:"))
        except ValueError:
            print("BAHH ENTER A VALID NUMBERRR")
            continue
        attempts += 1
        
        if guess < number:
            print("NAww it's bigger than that")
            
        elif guess > number:
            print("Awman too big")
            
        else:
            print(f"Congrats!! You got it :)) Now here's a banana for you 🍌🍌\n\nYou guessed the number in {attempts} attempts.")
            break
    play_again = input("wanna play again?(y/y)🥺🥺:").lower()
    if play_again == "y":
        guess_game()
    else:
        print("URGH BYE")
        
guess_game()
