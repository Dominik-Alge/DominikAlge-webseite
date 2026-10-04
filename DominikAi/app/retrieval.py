def find_documents(question):

    results = []

    if "bildung" in question.lower():
        results.append("bildung.md")

    if "politik" in question.lower():
        results.append("politik.md")

    return results
