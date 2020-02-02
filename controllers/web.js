function displayQuestion(answer) {
    document.getElementById(answer + 'Question').style.display = 'block'
    if (answer === 'yes') {
        document.getElementById('noQuestion').style.dislpay = 'none'
    } else if (answer === 'no') {
        document.getElementById('yesQuestion').style.display = 'none'
    }
}

function policyFormData() {
    const policyNumber = document.getElementById('policyNumber')
    const inceptionDate = document.getElementById('inceptionDate')
    const termType = document.getElementById('termType')
    const expirationDate = document.getElementById('expirationDate')
    const renewalTermType = document.getElementById('renewalTermType')
    const isRenewal = document.getElementById('isRenewal')
    const underwritingQuestions = document.getElementById('underwritingQuestions')
    const asAgent = document.getElementById('asAgent')
    const manualPolicyNumber = document.getElementById('manualPolicyNumber')
}