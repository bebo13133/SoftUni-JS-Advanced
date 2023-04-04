function evenPosition(input) {
    const result = input.filter((x,i) => i % 2 === 0)
   return (result.join(" "))
}
evenPosition(['20', '30', '40', '50', '60'])