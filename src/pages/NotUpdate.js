import { Link } from 'react-router-dom'

export default function NotUpdate() {
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col bg-gray-200">
            <p className="text-2xl text-gray-600">
                <i className="mr-4 far fa-frown"></i>
                Chức năng chưa được cập nhật
            </p>
            <Link className="mt-4 p-3 text-xl hover:underline bg-gray-300 rounded-lg" to="/TikTok/">Quay lại trang chủ</Link>
        </div>
    )
}
