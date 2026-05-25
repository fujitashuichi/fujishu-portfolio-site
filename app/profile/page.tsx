export default function Profile() {
  return (
    <div className="max-w-3xl w-full mx-auto pt-8">
      <table className="w-full">
        <tbody className="w-full">
          <tr className="flex my-0 mx-auto px-4 py-8 w-full">
            <th className="w-1/5 text-xl text-center">
              氏名
            </th>
            <td className="w-4/5 text-xl text-center">
              藤田 秀一
            </td>
          </tr>
          <tr className="flex my-0 mx-auto px-4 py-8 w-full">
            <th className="w-1/5 text-xl text-center">
              所属
            </th>
            <td className="w-4/5 text-xl text-center">
              学校法人角川ドワンゴ学園s高等学校
            </td>
          </tr>
          <tr className="flex my-0 mx-auto px-4 py-8 w-full">
            <th className="w-1/5 text-xl text-center">
              備考
            </th>
            <td className="w-4/5 text-xl text-center">
              <ul className="w-3/5 mx-auto">
                <li className="w-full mb-2">
                  <p className="text-left">2022/04:</p>
                  <p className="text-right">秋田県立秋田中央高校 入学</p>
                </li>
                <li className="w-full mb-2">
                  <p className="text-left">2025/10:</p>
                  <p className="text-right">休学</p>
                </li>
                <li className="w-full mb-2">
                  <p className="text-left">2026/04:</p>
                  <p className="text-right">s高等学校へ転入</p>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
