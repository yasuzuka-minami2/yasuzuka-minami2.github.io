"use client"

import { CalendarDays, ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import "./schedule.css"

export default function SchedulePage() {
    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-8">
                    <Link href="/">
                        <Button variant="ghost" className="mb-4">
                            ← トップページへ戻る
                        </Button>
                    </Link>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <CalendarDays className="h-8 w-8 text-primary" />
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-foreground">年間スケジュール</h1>
                        </div>

                        <a href="/schedule/2026_schedule.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="w-full md:w-auto gap-2">
                                <FileText className="h-4 w-4" />
                                閲覧する
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-4 md:p-8 overflow-hidden">
                    <div className="gyoji-wrapper">

                        <header className="gyoji-header">
                            <h2 className="gyoji-title">令和8年 安塚町 行事計画</h2>
                            <div className="gyoji-subtitle">2026年 予定表</div>
                        </header>

                        {/* Month Navigation */}
                        <nav className="flex flex-wrap gap-3 justify-center mb-8 px-2">
                            {[2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 1].map((month) => (
                                <Link
                                    key={month}
                                    href={`#month-${month}`}
                                    className="text-primary hover:text-primary/80 font-bold border-b-2 border-transparent hover:border-primary transition-colors text-lg"
                                >
                                    {month}月
                                </Link>
                            ))}
                            <Link
                                href="#duty-roster"
                                className="text-primary hover:text-primary/80 font-bold border-b-2 border-transparent hover:border-primary transition-colors text-lg"
                            >
                                各組当番表
                            </Link>
                        </nav>

                        {/* 2月 */}
                        <h3 id="month-2" className="gyoji-month-heading scroll-mt-20">2月</h3>
                        <div className="gyoji-list">
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date holiday">2月11日(水・祝)</span>
                                    <span className="gyoji-event-name">御鍬祭 (幟立て)</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:30</span>

                                        <span className="gyoji-label secondary">式典</span>
                                        <span className="gyoji-content">14:30〜</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">神社掃除、式典準備</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">全戸（神社当番組）</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3月 */}
                        <h3 id="month-3" className="gyoji-month-heading scroll-mt-20">3月</h3>
                        <div className="gyoji-list">
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">3月24日(火)</span>
                                    <span className="gyoji-event-name">地蔵堂祭</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:30</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">午前中開催予定</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">全戸（地蔵堂当番組）</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4月 */}
                        <h3 id="month-4" className="gyoji-month-heading scroll-mt-20">4月</h3>
                        <div className="gyoji-list">
                            {/* 4/5 1つ目 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">4月5日(日)</span>
                                    <span className="gyoji-event-name">第一回 家庭排水溝清掃</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:30</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">全戸、寺家一部（各組で実施）</span>
                                    </div>
                                </div>
                            </div>
                            {/* 4/5 2つ目 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">4月5日(日)</span>
                                    <span className="gyoji-event-name">農用用水溝清掃・工場排水溝清掃</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">時間</span>
                                        <span className="gyoji-content">家庭排水清掃後</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">農家全戸 <br /><small>※作業内容により2〜3月に変更あり</small></span>
                                    </div>
                                </div>
                            </div>
                            {/* 4/12 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">4月12日(日)</span>
                                    <span className="gyoji-event-name">春の祭礼 (幟立て)</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:30</span>

                                        <span className="gyoji-label secondary">式典</span>
                                        <span className="gyoji-content">14:30〜</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">神社清掃、式典準備</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">全戸（神社当番組）</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5月 */}
                        <h3 id="month-5" className="gyoji-month-heading scroll-mt-20">5月</h3>
                        <div className="gyoji-list">
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date holiday">5月3日(日・祝)</span>
                                    <span className="gyoji-event-name">野上がり</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:30（総会 09:45〜）</span>

                                        <span className="gyoji-label secondary">式典</span>
                                        <span className="gyoji-content">10:30〜</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">神社清掃、式典準備</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">農家全戸</span>
                                    </div>
                                </div>
                            </div>
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">5月24日(日)</span>
                                    <span className="gyoji-event-name">町民運動会</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">09:00</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">午前中予定（予備日：5月31日）</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">全員</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 6月 */}
                        <h3 id="month-6" className="gyoji-month-heading scroll-mt-20">6月</h3>
                        <div className="gyoji-list">
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">6月7日(日)</span>
                                    <span className="gyoji-event-name">宮池・排水周辺草刈</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:00</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">場所</span>
                                        <span className="gyoji-content">宮池・新田、笊池集合</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">農家全戸</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 7月 */}
                        <h3 id="month-7" className="gyoji-month-heading scroll-mt-20">7月</h3>
                        <div className="gyoji-list">
                            {/* 7/5 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">7月5日(日)</span>
                                    <span className="gyoji-event-name">祭礼用具虫干し、神社清掃、堤防草刈</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:30</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">備考</span>
                                        <span className="gyoji-content">天候によりコスモス種まき予定</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">神社当番組</span>
                                    </div>
                                </div>
                            </div>
                            {/* 7/19 1つ目 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">7月19日(日)</span>
                                    <span className="gyoji-event-name">墓地掃除</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">06:00</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">墓地関係者全員</span>
                                    </div>
                                </div>
                            </div>
                            {/* 7/19 2つ目 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">7月19日(日)</span>
                                    <span className="gyoji-event-name">祭礼用具虫干し予備日</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:30</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">神社当番組</span>
                                    </div>
                                </div>
                            </div>
                            {/* 7/19 3つ目 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">7月19日(日)</span>
                                    <span className="gyoji-event-name">神社清掃、堤防草刈（予備日）</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">09:00</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">コスモス種まき予備日（守る会）</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 8月 */}
                        <h3 id="month-8" className="gyoji-month-heading scroll-mt-20">8月</h3>
                        <div className="gyoji-list">
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">8月2日(日)</span>
                                    <span className="gyoji-event-name">農用排水溝掃除、草刈後 宮池、排水周辺草刈</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">07:30</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">農家全戸</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 10月 */}
                        <h3 id="month-10" className="gyoji-month-heading scroll-mt-20">10月</h3>
                        <div className="gyoji-list">
                            {/* 10/10 1つ目 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">10月10日(土)</span>
                                    <span className="gyoji-event-name">秋の祭礼準備（幟立て、提灯、行灯）</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:30</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">神社掃除（全戸）、提灯行灯枠準備、神社当番組</span>
                                    </div>
                                </div>
                            </div>
                            {/* 10/10 2つ目 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">10月10日(土)</span>
                                    <span className="gyoji-event-name highlight">コスモス・秋祭り・防災訓練</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">11:00</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">備考</span>
                                        <span className="gyoji-content">飲食・ふるまいは11:00頃より</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">全戸</span>
                                    </div>
                                </div>
                            </div>
                            {/* 10/11 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">10月11日(日)</span>
                                    <span className="gyoji-event-name">秋の大祭</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:30</span>

                                        <span className="gyoji-label secondary">式典</span>
                                        <span className="gyoji-content">14:30〜</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">神社掃除、祭礼準備</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">全戸（神社当番組）</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 11月 */}
                        <h3 id="month-11" className="gyoji-month-heading scroll-mt-20">11月</h3>
                        <div className="gyoji-list">
                            {/* 11/1 1つ目 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">11月1日(日)</span>
                                    <span className="gyoji-event-name">第二回 家庭排水溝清掃</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:30</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">全戸、寺家一部（各組で実施）</span>
                                    </div>
                                </div>
                            </div>
                            {/* 11/1 2つ目 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">11月1日(日)</span>
                                    <span className="gyoji-event-name">宮池、排水周辺草刈</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">10:00</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">農家全戸</span>
                                    </div>
                                </div>
                            </div>
                            {/* 11/23 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date holiday">11月23日(月・祝)</span>
                                    <span className="gyoji-event-name">新嘗祭</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:30</span>

                                        <span className="gyoji-label secondary">式典</span>
                                        <span className="gyoji-content">14:30〜</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">神社掃除、式典準備</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">全戸（神社当番組）</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 12月 */}
                        <h3 id="month-12" className="gyoji-month-heading scroll-mt-20">12月</h3>
                        <div className="gyoji-list">
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">12月6日(日)</span>
                                    <span className="gyoji-event-name">年末勘定</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">時間</span>
                                        <span className="gyoji-content">09:00〜11:00</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">土木費、墓地管理費、役員手当等</span>
                                    </div>
                                </div>
                            </div>
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">12月13日(日)</span>
                                    <span className="gyoji-event-name">農家集会</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">時間</span>
                                        <span className="gyoji-content">19:00</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">役員選挙他（農家全戸）</span>
                                    </div>
                                </div>
                            </div>
                            {/* 12/31 1つ目 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">12月31日(木)</span>
                                    <span className="gyoji-event-name">年末大掃除、篝火・旦祭準備</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">集合</span>
                                        <span className="gyoji-content">08:30</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">神社・参集会館大掃除（全戸）、神社当番組</span>
                                    </div>
                                </div>
                            </div>
                            {/* 12/31 2つ目 */}
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">12月31日(木)</span>
                                    <span className="gyoji-event-name">年越し篝火</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">時間</span>
                                        <span className="gyoji-content">23:30〜翌01:30</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">役員全員</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 1月 */}
                        <h3 id="month-1" className="gyoji-month-heading scroll-mt-20">2027年 1月</h3>
                        <div className="gyoji-list">
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date holiday">1月1日(金・祝)</span>
                                    <span className="gyoji-event-name">大篝火・歳旦祭</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">大篝火</span>
                                        <span className="gyoji-content">01:30〜10:00</span>

                                        <span className="gyoji-label secondary">式典</span>
                                        <span className="gyoji-content">07:00〜</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">内容</span>
                                        <span className="gyoji-content">歳旦祭式典（全戸）、片付け（篝火当番）</span>
                                    </div>
                                </div>
                            </div>
                            <div className="gyoji-card">
                                <div className="gyoji-card-header">
                                    <span className="gyoji-date">1月10日(日)</span>
                                    <span className="gyoji-event-name">定期総会</span>
                                </div>
                                <div className="gyoji-details">
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">時間</span>
                                        <span className="gyoji-content">09:00</span>
                                    </div>
                                    <div className="gyoji-detail-row">
                                        <span className="gyoji-label">対象</span>
                                        <span className="gyoji-content">全戸</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 当番表セクション */}
                        <section className="gyoji-table-section">
                            <h3 id="duty-roster" className="gyoji-table-title scroll-mt-20">各組 当番表</h3>

                            <h4>参集会館掃除担当（月当番）</h4>
                            <table className="gyoji-table">
                                <tbody>
                                    <tr>
                                        <th>1月</th>
                                        <td>東組</td>
                                    </tr>
                                    <tr>
                                        <th>2月</th>
                                        <td>西1組</td>
                                    </tr>
                                    <tr>
                                        <th>3月</th>
                                        <td>西2組</td>
                                    </tr>
                                    <tr>
                                        <th>4月</th>
                                        <td>南1組</td>
                                    </tr>
                                    <tr>
                                        <th>5月</th>
                                        <td>南2組</td>
                                    </tr>
                                    <tr>
                                        <th>6月</th>
                                        <td>南3組</td>
                                    </tr>
                                    <tr>
                                        <th>7月</th>
                                        <td>新南組</td>
                                    </tr>
                                    <tr>
                                        <th>8月</th>
                                        <td>ニュータウン1組</td>
                                    </tr>
                                    <tr>
                                        <th>9月</th>
                                        <td>ニュータウン2組</td>
                                    </tr>
                                    <tr>
                                        <th>10月</th>
                                        <td>ニュータウン3組</td>
                                    </tr>
                                    <tr>
                                        <th>11月</th>
                                        <td>北組</td>
                                    </tr>
                                    <tr>
                                        <th>12月</th>
                                        <td>南組</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h4>その他当番</h4>
                            <table className="gyoji-table">
                                <tbody>
                                    <tr>
                                        <th>神社当番</th>
                                        <td>東組、西1組、西2組、南2組、ニュータウン2組、ニュータウン3組</td>
                                    </tr>
                                    <tr>
                                        <th>地蔵当番</th>
                                        <td>南組、南2組、ニュータウン2組</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <footer className="gyoji-footer">
                            <p>2026年（令和8年）安塚町行事計画<br />※天候等により変更になる場合があります。</p>
                        </footer>

                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/">
                        <Button size="lg" className="text-base px-8">
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            トップページに戻る
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
