function App(){
    let myarray=[
        {firstname:"abc",lastname:"abc"},
        {firstname:"def",lastname:"def"},
        {firstname:"ghi",lastname:"ghi"}
    ];
    return(
        <>
            <table border={1}>
                <tr>
                    <th>Index</th>
                    <th>firstname</th>
                    <th>lastname</th>   
                </tr>
                {myarray.map((mydata),index)=>{
                    return<tr>
                        <td>{index+1}</td>
                        <td>{mydata.firstname}</td>
                        <td>{mydata.lastname}</td>
                    </tr>
                }}
            </table>
        </>
    )
}