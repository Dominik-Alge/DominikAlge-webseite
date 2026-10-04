from auth import check_login
from retrieval import find_documents
from llm import ask_dominik_ai

def run():

    question = input("Frage:")

    docs = find_documents(question)

    answer = ask_dominik_ai(
        question,
        docs
    )

    print(answer)

if __name__ == "__main__":
    run()
