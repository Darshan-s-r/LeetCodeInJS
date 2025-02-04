function NumberOfPath(a, b)
{
    // code here
    let matrix = Array(a+1).fill().map(row => Array(b+1).fill(0))
    matrix[1][1] = 1;
    for(let i=1; i<=a; i++){
        for(let j = 1; j<=b; j++){
            if(j < b){
                matrix[i][j+1] = matrix[i][j+1] + matrix[i][j]
                
            }
            if(i < a){
                matrix[i+1][j] = matrix[i+1][j] + matrix[i][j]
            }
        }
    }
    console.log(matrix)
    return matrix[a][b]
    
}

console.log(NumberOfPath(12, 3))