export default function Table(){
    return (
        <table class="overflow-x-auto table table-md w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>名前</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
            </tr>
          </tbody>
        </table>
    )
}