import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  // 检查是否处于全屏状态
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // 切换全屏模式
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.error('全屏切换失败:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 全屏按钮 */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-200"
        title={isFullscreen ? '退出全屏' : '进入全屏'}
      >
        <i className={`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
      </button>

      <header className="bg-white shadow-md py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">智宿通</h1>
              <p className="text-gray-600 mt-1">新生入学寝室自动分配系统</p>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-600 px-6 py-4 text-white">
              <h2 className="text-xl font-semibold">新生入口</h2>
              <p className="text-sm opacity-80">填写住宿偏好，查询分配结果</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">欢迎新同学！请登录系统填写您的住宿偏好信息，帮助我们为您匹配最合适的室友。</p>
              <div className="space-y-4">
                <Link to="/student/preference" className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md text-center transition duration-200">
                  <i className="fas fa-clipboard-list mr-2"></i> 填写住宿偏好
                </Link>
                <Link to="/student/result" className="block w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md text-center transition duration-200">
                  <i className="fas fa-search mr-2"></i> 查询分配结果
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-800 px-6 py-4 text-white">
              <h2 className="text-xl font-semibold">管理员入口</h2>
              <p className="text-sm opacity-80">系统管理与寝室分配</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">管理员可以通过此入口登录系统，管理学生信息、寝室信息，配置分配规则并执行自动分配。</p>
              <div className="space-y-4">
                <Link to="/admin/login" className="block w-full py-2 px-4 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-md text-center transition duration-200">
                  <i className="fas fa-user-shield mr-2"></i> 管理员登录
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">系统公告</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <p className="text-gray-700">2023级新生寝室分配工作已开始，请新生于2023年8月15日前完成偏好填写。</p>
              <p className="text-sm text-gray-500 mt-1">2023-08-01</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-1">
              <p className="text-gray-700">系统已完成升级，新增了更多偏好选项，提高了匹配精度。</p>
              <p className="text-sm text-gray-500 mt-1">2023-07-20</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-gray-500">© 2023 智宿通 - 新生入学寝室自动分配系统</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-question-circle"></i> 帮助中心
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-phone"></i> 联系我们
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App