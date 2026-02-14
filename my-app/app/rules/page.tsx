import { Card } from "@/components/ui/card"
import { BookOpen, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RulesPage() {
    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-8">
                    <Link href="/rules-list">
                        <Button variant="ghost" className="mb-4">
                            ← 規約一覧に戻る
                        </Button>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <BookOpen className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground">安塚自治会規約</h1>
                    </div>

                    {/* Table of Contents */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        <Link href="#term-rules">
                            <Button variant="outline" size="sm" className="bg-background">
                                安塚町自治会規約
                            </Button>
                        </Link>
                        <Link href="#term-supplement">
                            <Button variant="outline" size="sm" className="bg-background">
                                自治会規約補則
                            </Button>
                        </Link>
                        <Link href="#term-memo">
                            <Button variant="outline" size="sm" className="bg-background">
                                自治会規約覚書事項
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* 安塚町自治会規約 */}
                    <Card className="p-6 md:p-8" id="term-rules">
                        <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">安塚町自治会規約（令和6年1月）</h2>

                        <div className="space-y-6 text-foreground/90">
                            <section>
                                <h3 className="font-bold text-lg mb-2">第1条 名称</h3>
                                <p className="mb-2">本会は鈴鹿市安塚町自治会と称し、事務所を自治会長宅に置く。</p>
                                <p className="text-sm text-muted-foreground">※以後条文では、自治会長・副自治会長の「自治」を省き会長・副会長で明記する。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第2条 会員</h3>
                                <p className="mb-2">1、本会の会員は、安塚町に居住する世帯をもって組織し、自治会を 北組・南組・東組・西1組・西2組・南1組・南2組・南3組・新南組・ニュータウン1組・ニュータウン2組・ニュータウン3組の12組に分ける。</p>
                                <p className="mb-2 pl-4">但し、同一敷地内（地続き）については、2世帯であっても1世帯と認める。</p>
                                <p className="mb-2 pl-4">又、組要望については、飛び地（島）の組み入れは認めない。新たに組線引きにて発生時は、組同士協議で事を決める。</p>
                                <p className="mb-2 text-sm text-muted-foreground pl-4">※ 上記但し書き文付き自治会規約覚書 24.に※印3項の覚書がある。</p>
                                <p>2、安塚町に住所を有する法人を賛助会員とする。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第3条 政治活動</h3>
                                <p>本会は政治的に中立を守り、一党一派に偏る政治活動を禁止する。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第4条 目的</h3>
                                <p>本会は町民相互の親睦と福祉の増進に努め、町民自治の繁栄を図ることを目的とする。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第5条 事業</h3>
                                <p className="mb-2">本会は第4条の目的を達成するため、次の事業を行う。</p>
                                <ol className="list-decimal list-inside space-y-1 pl-4">
                                    <li>会員相互の親睦に関すること。</li>
                                    <li>共有財産に関すること。</li>
                                    <li>防火防犯に関すること。</li>
                                    <li>産業振興に関すること。</li>
                                    <li>保険衛生に関すること。</li>
                                    <li>文化向上に関すること。</li>
                                    <li>土木事業に関すること。</li>
                                    <li>その他自治会の発展並びに市政の協力に関すること。</li>
                                </ol>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第6条 役員</h3>
                                <ul className="list-none space-y-1 pl-4">
                                    <li>会長 1名</li>
                                    <li>副会長 3名</li>
                                    <li>組長 12名</li>
                                    <li>会計 各部1名組長これに任ず</li>
                                    <li>会計監査 2名</li>
                                    <li>農業委員 1名</li>
                                    <li>災害対策委員 町役員が兼任</li>
                                    <li>衛生委員 会長・副会長・組長が兼任</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第7条 役員の任務</h3>
                                <ol className="list-decimal list-inside space-y-1 pl-4">
                                    <li>会長は本会を代表し、会務を掌握する。</li>
                                    <li>副会長1名は、会務の掌握を補佐し、会長事故あるときは会長職を代行する。</li>
                                    <li>副会長1名は土木を兼任し、土木事業並びに会長を補佐する。</li>
                                    <li>副会長1名は、参集会館の管理並びに会計担当及び会長を補佐する。</li>
                                    <li>会計は会計経理を司る。</li>
                                    <li>組長は組を代表し、会議に出席し、通知事項を組員に伝達する。</li>
                                    <li>会計監査は、会計経理を監査する。</li>
                                    <li>会計監査員が事故ある場合は、役員協議の上任命する。</li>
                                </ol>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第8条 役員の選出と任期</h3>
                                <p className="mb-2">役員は選挙にて決めるが、会長は推薦による立候補を含めて選挙にて決める。</p>
                                <ol className="list-decimal list-inside space-y-1 pl-4">
                                    <li>会長・副会長（会長補佐役 次期会長）の任期は2ヵ年とし、再選を妨げず。</li>
                                    <li>副会長（土木、参集会館管理）・組長の任期は1ヵ年とし、再選を妨げず。</li>
                                    <li>農業委員の任期は3年とし、再選を妨げず。</li>
                                    <li>その他の役員も任期は1ヵ年とし、再選を妨げず。</li>
                                    <li>役員辞任届ある場合は臨時総会をもって議決する。</li>
                                    <li>会長は会員より選挙にて選出する。</li>
                                    <li>副会長3名は、会長補佐役は町全体より1名、参集会館管理は西2組・南1組・南2組・南3組・新南組・ニュータウン1組・ニュータウン2組・ニュータウン3組より1名、土木は北組・南組・東組・西1組より1名をそれぞれ選出する。</li>
                                    <li>組長は各組より選挙にて選出する。前項副会長選出の組は新組長を再選出する。</li>
                                    <li>第5項、第6項の会長、副会長の選挙にて最高得票数が総得票数の過半数に達しない場合は、上位得票数2名による決戦投票によって決する。</li>
                                    <li>組長以下の選挙にて最高得票数が同票の場合は、同票者の再選挙にて決する。</li>
                                </ol>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第9条 代議員</h3>
                                <p className="mb-2">町内各組より代議員2名を選出。任期は1年とする。</p>
                                <ol className="list-decimal list-inside space-y-1 pl-4">
                                    <li>代議員は組長を補佐し、組内の意見を集約し、役員会で議事の決議が得られない議事があるとき、会長は代議員を招集し、役員、代議員による拡大委員会を開催して議事を決することができる。</li>
                                    <li>拡大委員会は総会、役員会に準ずる決議機関として、定数の過半数の出席をもって成立する。</li>
                                    <li>代議員には執行権は付加しない。</li>
                                </ol>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第10条 総会</h3>
                                <p className="mb-2">定期総会は、毎年1月4日 〜 10日の間の日曜日に開く。</p>
                                <p className="mb-2">但し、特別事態の場合はこの限りでない。</p>
                                <ol className="list-decimal list-inside space-y-1 pl-4">
                                    <li>
                                        <span>定期総会は、各戸より1名出席し、全会員数の3分の2以上の出席者をもって開会し、議事はその過半数以上の賛成をもって議決することができる。</span>
                                        <br /><span className="pl-6 block">その他、臨時総会、役員会、拡大委員会は、必要に応じ会長が招集することができる。</span>
                                    </li>
                                    <li>臨時総会は、全会員数の2分の1以上の出席で成立し、過半数以上の賛成をもって議決することができる。臨時総会は、必要に応じ会長が招集することができる。</li>
                                    <li>
                                        <span>会議はそれぞれ出席者数にて成立し、議事は2分の1以上の賛成により議決する。</span>
                                        <br /><span className="pl-6 block">但し、議事項目により会長の権限にて2分の1以上の出席がなくとも議決することができる。</span>
                                    </li>
                                    <li>総会に不参加の会員は組長に委任状を提出すること。総会での委任状は、議決権の行使のみで投票権はない。</li>
                                </ol>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第11条 会費</h3>
                                <p className="mb-2">本会の経費は市委託料及び会費をもってあてる。</p>
                                <ol className="list-decimal list-inside space-y-1 pl-4">
                                    <li>
                                        <span>会費は1ヶ月 800円とする。</span>
                                        <br /><span className="pl-6 block">但し、借家及びアパート居住者は400円とし、家主又は管理会社が一括徴収し町会計あるいは組長へ納める。</span>
                                    </li>
                                    <li>年末決算並びに特別寄付金は、各委員協議の上にてその都度会員より徴収する。</li>
                                    <li>
                                        <span>高齢者世帯の町費減額について</span>
                                        <br /><span className="pl-6 block">同居している家族が75歳以上の名合で（だし、75歳未満の同居家族がいる場合でも、障がい者など特別な事情がある場合は、役員会で判断する。）</span>
                                        <ul className="list-disc list-inside pl-10 mt-1">
                                            <li>子どもが町民で町費を支払っている場合・・・町費0円とする。</li>
                                            <li>本人のみ町民の場合・・・町費4800円／年とする。</li>
                                        </ul>
                                    </li>
                                </ol>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第12条 会計年度</h3>
                                <p className="mb-2">本会の会計年度は1月より12月までとして、次に掲げる会計決算は定期総会に報告、承認を得なければならない。</p>
                                <p className="pl-4">1、町会計 2、神社会計 3、参集会館会計 4、運動会会計 5、街灯会計 6、墓地会計 7、地蔵堂会計 8、事務委託費会計 9、秋祭り会計</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第13条 議事</h3>
                                <p className="mb-2">定期総会、臨時総会の議事は次の通りとする。</p>
                                <ol className="list-decimal list-inside space-y-1 pl-4">
                                    <li>予算</li>
                                    <li>規約の改廃</li>
                                    <li>事業の承認</li>
                                    <li>その他</li>
                                </ol>
                            </section>

                            <section className="mt-8 border-t pt-4">
                                <p>付則 1、この規約は令和6年1月7日より実施する。</p>
                                <p>付則 2、農業関係の規約、議事録は別冊とする。</p>
                            </section>
                        </div>
                    </Card>

                    {/* 自治会規約補則 */}
                    <Card className="p-6 md:p-8" id="term-supplement">
                        <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">自治会規約補則</h2>

                        <div className="space-y-6 text-foreground/90">
                            <section>
                                <h3 className="font-bold text-lg mb-2">第1条</h3>
                                <p>町への入会、退会は即日に組長を経由して会長に報告すること。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第2条 市報、公報等の配布</h3>
                                <p>市報、公報等の配布書類は、会長が直接組長に配布する。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第3条 組用番</h3>
                                <p>組用番は組長宅に出向き、用件を組員に伝達する。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第4条 PTA役員</h3>
                                <p>PTA役員は、3月にPTA会員より選出する。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第5条 体育委員</h3>
                                <p>体育委員は2名置き、任期は2年とし再任を妨げず。体育委員男子1名と女子1名は会長が任命する。</p>
                                <p>尚、所定の体育助成金以外の助成金については、役員会にて協議決定する。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第6条 役員手当 及び 諸手当（年額）</h3>
                                <ol className="list-decimal list-inside space-y-1 pl-4">
                                    <li>会長（市事務委託手数料を含まず） 44,000円</li>
                                    <li>副会長（1名に付き） 18,000円</li>
                                    <li>参集会館館長手当（会計手当を含む） 6,000円</li>
                                    <li>組長（1名に付き） 15,000円</li>
                                    <li>氏子総代代表（町役員兼任氏子総代代表は除く） 15,000円</li>
                                    <li>神官手当（祭礼供物は神官持ち） 250,000円</li>
                                    <li>公設消防手当（1名に付き） 12,000円</li>
                                    <li>墓地管理手当 1,000円</li>
                                    <li>
                                        <span>会計手当 2,000円</span>
                                        <br /><span className="pl-6 text-sm">但し、町会計・神社会計は 10,000円</span>
                                    </li>
                                    <li>定期総会書記議事録作成者 3,000円</li>
                                    <li>体育委員（1名に付き） 5,000円</li>
                                    <li value="13">民生・児童委員（1名に付き） 10,000円</li>
                                    <li>さぎ草の会会員（1名に付き） 3,000円</li>
                                    <li>氏子総代（1名に付き） 3,000円</li>
                                    <li>交通指導員手当（1名に付き） 3,000円</li>
                                </ol>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第7条 各種補助金等（年間）</h3>
                                <ol className="list-decimal list-inside space-y-1 pl-4">
                                    <li>体育育成資金（細部は町役員で決定する。） 140,000円</li>
                                    <li>安楽会補助金 110,000円</li>
                                    <li>子供会助成金 190,000円</li>
                                    <li>神社維持運営費 550,000円</li>
                                    <li>参集会館運営基金 650,000円</li>
                                    <li>町民運動会費 400,000円</li>
                                    <li>秋祭り補助金 320,000円</li>
                                    <li>資源ごみ指導員手当（市助成金 165,000円を当てる） 165,000円</li>
                                    <li>街灯運営費 400,000円</li>
                                </ol>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第8条 入会金及びその他の料金</h3>
                                <ol className="list-decimal list-inside space-y-1 pl-4">
                                    <li>町入り入会金 1,000円以上</li>
                                    <li>新地墓地建立者（1世帯1区画とする） 50,000円</li>
                                    <li>参集会館使用料は『参集会館貸館基準』による。</li>
                                    <li>消防・防犯費は、町費へ納入する。（町内にある企業は年間 1,500円）</li>
                                </ol>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第9条 安楽会</h3>
                                <p>町内在住の65歳以上の者で、安楽会を構成する。</p>
                                <p>65歳以上の人は、入会することが望ましい。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第10条 墓地管理</h3>
                                <div className="space-y-2">
                                    <div className="flex">
                                        <span className="mr-2">1、</span>
                                        <div>
                                            墓地の管理は会長がする。墓地管理費を安塚町内の所有者から年額800円徴収する、他所の所有者からは年額3,000円徴収する。
                                            <br />尚、会計は町内からは組長の1名が受け持ち維持管理とし、他所は安楽会が請け負う清掃活動費に当てる。
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-2">2、</span>
                                        <div>墓地管理運営については、『安塚町共同墓地管理運営規則』に従う。</div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第11条 神社</h3>
                                <div className="space-y-2">
                                    <div className="flex">
                                        <span className="mr-2">1、</span>
                                        <div>氏子総代代表は2名とし、1名は会長・副会長・組長の内からこれを兼任する。他の1名は氏子より選出し、神社の運営管理について専任となる。その他氏子総代を3名置き、神社行事の内外役務を遂行する。</div>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-2">2、</span>
                                        <div>宮世話は東組、西1組、西2組、南2組、ニュータウン2組、ニュータウン3組 と 北組、南組、南1組、南3組、新南組、ニュータウン1組 が1年交代でする。</div>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-2">3、</span>
                                        <div>
                                            祭礼期日は次の通りとする。
                                            <div className="pl-4 mt-1">
                                                ・歳旦祭 1月1日 ・御鍬祭（おくわいけ） 2月11日<br />
                                                ・春祭（小祭） 4月第2日曜日 ・秋祭（大祭） 10月第2日曜日<br />
                                                ・新嘗祭 11月23日
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-2">4、</span>
                                        <div>大祭期日には、宮世話は枠埋け（のぼり・提灯）の日より2日間神社の世話をする。</div>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-2">5、</span>
                                        <div>祭礼 大のぼりは、御鍬祭・春祭・秋祭（前日、当日）のみとし、その他の祭礼日は国旗を掲げる。</div>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-2">6、</span>
                                        <div>神社祭提灯は、神社会計より修繕費の支払いをする。</div>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-2">7、</span>
                                        <div>神社祭礼日には、全員参列し特別参列者は、会長 ・氏子総代代表 ・副会長 ・各組長 ・農業委員とする。</div>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-2">8、</span>
                                        <div>神社祭礼費は、各氏子より予算に応じ寄付すること。</div>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-2">9、</span>
                                        <div>
                                            氏子より選出された氏子総代代表の任期は3年間とし、再任を妨げない。<br />
                                            町役員兼任の氏子総代代表の任期は、役員任期の間とする。<br />
                                            氏子総代の任期は3年間とし、再任を妨げない。
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-2">10、</span>
                                        <div>
                                            氏子総代は 東組、西1組で1名、南組、北組で1名、西2組、南1組、南2組、南3組、新南組、ニュータウン1組、ニュータウン2組、ニュータウン3組で1名選出する。<br />
                                            選出方法は、各担当地区での推薦によるか、それで決まらなければ担当地区内の選挙で決める。
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第12条 遺族保護委員会</h3>
                                <p>役員は、会長1名とする。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第13条 山の神</h3>
                                <p>山の神は12月7日とする。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第14条 神明講</h3>
                                <p>神明講は一時休講とし、備品は祭器庫に保管する。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第15条 消防用ホースの保管場所</h3>
                                <ol className="list-decimal list-inside space-y-1 pl-4">
                                    <li>東組 防火用水槽 南側</li>
                                    <li>西2組 小林正博宅北側</li>
                                    <li>南1組 樋口勝宅前</li>
                                    <li>南組 精米倉庫南</li>
                                    <li>北組 地蔵堂東側</li>
                                    <li>南2組 三重サービスショップ車展示場道路側</li>
                                    <li>南3組 朝日ガス南側</li>
                                    <li>南組 渡邊良明宅 西側</li>
                                    <li>ニュータウン1組 アパート駐車場北側</li>
                                </ol>
                                <p className="mt-2 pl-4">設備・備品については、点検時に不良あれば役員会にて報告し交換する。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第16条 地蔵祭</h3>
                                <p>地蔵祭は、3月24日とし、祭当番は『北組、南3組、ニュータウン1組』『南組、南2組、ニュータウン2組』『新田西1組、西2組、ニュータウン3組』『東組、南1組、新南組』として各組1年交代の輪番制とする。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第17条 防災</h3>
                                <p>町内に災害が発生した場合は、『安塚町自主防災隊規約』に従って行動をとる。</p>
                            </section>

                            <section>
                                <h3 className="font-bold text-lg mb-2">第18条 民生委員、さぎ草の会会員</h3>
                                <div className="space-y-2">
                                    <div className="flex">
                                        <span className="mr-2">1、</span>
                                        <div>民生委員・児童委員は担当地域を北部地区（北組、南組、東組、西1組、西2組）と南部地域（南1組、南2組、南3組、新南組、ニュータウン1組、ニュータウン2組、ニュータウン3組）に区分し2名を置く。選出方法は推薦によるが、それで決まらなければ地区内の選挙で決め、会長の推薦が必要である。任期は3年とし再選を妨げず。</div>
                                    </div>
                                    <div className="flex">
                                        <span className="mr-2">2、</span>
                                        <div>さぎ草の会会員は2名を置く。選出方法は推薦によるが、それで決まらなければ選挙で決め、会長の推薦が必要である。任期は1年とし再選を妨げず。</div>
                                    </div>
                                </div>
                            </section>

                            <section className="mt-8 border-t pt-4">
                                <p>付則 1、第16条 町出初式・・・消防団解散により削除、第17・18・19条を繰上げる。</p>
                                <p>付則 2、この規約補則は令和6年1月7日より実施する。</p>
                                <p>付則 3、この規約補則は、定例総会の決議に沿って修正した。</p>
                            </section>
                        </div>
                    </Card>

                    {/* 自治会規約覚書事項 */}
                    <Card className="p-6 md:p-8" id="term-memo">
                        <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">自治会規約覚書事項</h2>

                        <div className="space-y-6 text-foreground/90">
                            <p className="mb-4">この覚書事項は、規約・規約補則に入っていないが自治会として取り決めた事項である。</p>

                            <div className="space-y-6">
                                <div>
                                    <p className="font-bold">1、交通安全の為、町民及び外来者共に、住宅地域内における徐行運転の趣旨徹底を図り交通安全に心がける。 ・・・平成6年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">2、緊急事態が発生した場合、総代は役員又は、町民を招集する。 ・・・平成6年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">3、町排水溝、道路排水溝工事の分担金割合は、役員及び関係者にて協議決定する。 ・・・平成6年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold mb-2">4、各排水溝の清掃について ・・・平成6年度覚書</p>
                                    <div className="pl-4 space-y-1">
                                        <p>1）農業排水溝と家庭排水溝の清掃作業分担を明確にする。</p>
                                        <p>2）家庭排水溝の清掃に伴う人夫賃については、各組に一任する。</p>
                                        <p>3）幹線排水溝は、町全員で年1,2回行う。</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold">5、浄化槽の設置については、総代宅及び農業委員宅に出向き承認を得る。 ・・・平成6年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold mb-2">6、集会会館使用心得の厳守について</p>
                                    <div className="pl-4 space-y-2">
                                        <p>1）会館を使用するときは、先ず予約を取ること。<br />使用当日、責任者が館長宅へ行き、鍵を借りる。使用後は電気・水道・ガスそれに火の始末及び戸締りを確認の上、館長宅へ鍵と「参集会館使用心得」届出表を提出のこと。</p>
                                        <p>2）エアコンの切り忘れについては、罰金三千円を徴収する。<br />罰金を納入しないグループについては、以後会館の使用をさせない。</p>
                                        <p>3）参集会館使用後の ごみ については、使用当日の責任者が持ち帰る。</p>
                                        <p>4）参集会館の鍵は、総代及び館長が保持する。又、その他会館使用の便宜上鍵を保持している者は、毎年初めに誓約書を作成し、責任を持って保管をすること。 ・・・平成6年度覚書</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold">7、「獅子舞」については、町文化の保存ということでは必要であるが、道具等 傷みがひどく、伝承するためには道具等の事前調査が必要である。従って保存会を設立する前に準備会を設立する。 ・・・平成12年覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">8、町および各組で維持管理してきた町内の防犯灯（街路灯）は、平成14年度より町で維持管理する。従って維持管理費は町会計より支出する。</p>
                                    <p className="pl-4">防犯灯の増設については、町役員が協議の上必要と認められる箇所から予算を考慮し、増設すること。 ・・・平成14年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">9、集合賃貸住宅の配布書類で問題があった場合は、直接管理会社かオーナーに町から連絡し、解決できない場合は役員会で審議し解決を図る。 ・・・平成17年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">10、家庭排水清掃の出不足料は、組で取り決めているが、集合賃貸住宅の住民に出不足の問題が多い、この問題はあくまで組で管理すべき問題であって、組での解決が困難であれば町役員も含め対応する。 ・・・平成17年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">11、ゴミ集積所の新設・更新は町負担とし、修理・保全は各組負担とする。 ・・・平成19年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">12、衛生会計については、平成20年度の定期総会にて、平成20年度より町会計に統合することが決定された。（従来の自治会規約補足 第13条は削除） ・・・平成20年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">13、町用番については最終まで回ったため、町用番に関する条項を削除する。</p>
                                    <p className="pl-4">但し、市報、広報等の配布については、総代の役割であるため、第2条として記載する。 ・・・平成21年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold mb-2">14、各種補助金の改定について</p>
                                    <div className="pl-4 space-y-1">
                                        <p>4.神社維持運営費 改定前 400,000 円 → 改定後 500,000 円</p>
                                        <p>5.参集会館運営基金 改定前 300,000 円 → 改定後 400,000 円</p>
                                        <p>7.夏祭り協賛補助金 改定前 100,000 円 → 改定後 170,000 円 ・・・平成21年度覚書</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold">15、「自治会規約第 7 条の3 各種補助金（年間）子供会助成金」について 90, 000から110, 000に改定 ・・・平成22年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">16、神社祭礼に於ける掃除開始時間を 8:30 分からに統一 ・・・平成22年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">17、各組の公園除草作業は、各組にて実施する。費用は、市補助金を活用する。（1公園1万円とする） ・・・平成23年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">18、自治会規約補則第6条に第16項を追加する。第16項 交通指導員手当（1名に付き） 年額 3,000円を追加する。 ・・・平成24年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">19、交通指導員を3名体制から5名体制に改める。 ・・・平成24年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">20、各種補助金の改定について 第9号として、街灯運営費 500, 000円を追加する。 ・・・平成25年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">21、平成25年1月6日の定期総会でニュータウン1組（軒数が増えたので）から分割してニュータウン3組を設けること、また、組み数が増えることに伴う各当番の割り振りの見直しが承認された。 ・・・平成25年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">22、平成26年1月5日の定期総会で、ニュータウン3組を設け、12組になるため自治会規約と自治会規約補足の各当番割を調整し、改正する。</p>
                                    <p className="pl-4">規約第2条会員 第1項、第6条役員 組長12名に、第8条役員の選出と任期第6項及び規約補足第11条神社第2項・第10項を改める。 ・・・平成26年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">23、平成27年1月4日の定期総会で、自治会規約補則第7条各種補助金等の第6項 町民運動会費 300, 000円 を 400, 000万円に改め 第7項 夏祭り協賛補助金 170, 000円 を 200, 000万円に改める。 ・・・平成27年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">24、平成28年1月10日の定期総会で、自治会規約第2条第1項の条文の一部</p>
                                    <p className="pl-4 mb-2">「但し、1世帯であっても異なる場所に居住している場合は2世帯とみなす。」を次の通りとする。</p>
                                    <p className="pl-4 mb-2 font-bold">変更文</p>
                                    <p className="pl-4 mb-2">但し、同一敷地内（地続き）については、2世帯であっても1世帯と認める。</p>
                                    <p className="pl-4 mb-2">又、組要望については、飛び地（島）の組み入れは認めない。新たに組線引きにて発生時は、組同士協議で事を決める。</p>
                                    <p className="pl-4 mb-2">※親族について・・・娘婿世帯（名字が異なる）も認める。</p>
                                    <p className="pl-4 mb-2">※隣に土地を新規購入で建てた場合は、独立して町入りする。</p>
                                    <p className="pl-4 mb-2">両親が町役不可時点でこれを組が認めれば1世帯と認める。</p>
                                    <p className="pl-4">※親子関係では、複数発生する場合もあるので2世帯を1世帯とするのは1組のみとする。（例：子二人が同敷地内、孫二人が同敷地内の複数） ・・・平成28年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">25、平成28年1月10日の定期総会で、自治会規約第12条 会計年度文について追加変更する。</p>
                                    <p className="pl-4 mb-2">条文： 本会の会計年度は1月より12月までとして、会計決算は定期総会に報告承認を得なければならない。</p>
                                    <p className="pl-4 mb-2">追加変更条文： 本会の会計年度は1月より12月までとして、次に掲げる会計決算は定期総会に報告承認を得なければならない。</p>
                                    <p className="pl-4">1、町会計 2、神社会計 3、参集会館会計 4、運動会会計 5、外灯会計 6、墓地会計 7、地蔵堂会計 8、事務委託費会計 ・・・平成28年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">26、平成28年1月10日の定期総会で、自治会規約補則第7条各種補助金等の第3項 子供会助成金 110, 000円 を 190, 000万円に改め 第7項 夏祭り協賛補助金 200, 000円 を 220, 000万円に改める。 ・・・平成28年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">27、平成29年1月8日の定期総会で、自治会規約補則第7条各種補助金等の第5項 参集会館運営基金 400, 000円 を 500, 000円に改める。</p>
                                </div>

                                <div>
                                    <p className="font-bold">28、自治会規約補則 第 11 条 神社</p>
                                    <p className="pl-4">第5項 氏子より選出された氏子総代代表の任期は5年間とし、再任を妨げない。・・・任期5年間を3年間に変更する。 ・・・平成29年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">29、自治会規約（1条・6条・7条・8条）・自治会規約補則（1条・6条・11条・13条）総代／副総代の名称を会長／副会長に変更する。 ・・・平成30年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold">30、「自治会規約補則」第 10 条 墓地管理第1項文を変更する。</p>
                                    <p className="pl-4">1、墓地の管理は会長がする。墓地管理費を安塚町内の所有者から年額 800円徴収する、他所の所有者からは年額3, 000円徴収する。</p>
                                    <p className="pl-4">尚、会計は町内からは組長の1名が受け持ち、他所は安楽会から1名受け持つ。</p>
                                </div>

                                <div>
                                    <p className="font-bold">31、「安塚町共同墓地管理運営規則」（管理費）第 14 条分を変更する。</p>
                                    <p className="pl-4">墓地使用者は、墓地の清掃その他維持管理に要する経費として、町内居住者は年間 800 円を納入しなければならない。他所居住者は年 3, 000 円を納入しなければならない。この管理費は自治会から毎月の定期清掃委託活動に充てる。</p>
                                </div>

                                <div>
                                    <p className="font-bold mb-2">32、自治会規約補則、第7条の補助金について</p>
                                    <div className="pl-4 space-y-1">
                                        <p>子供会助成金・・・190, 000 円（据え置き）</p>
                                        <p>参集会館運営基金・・・500, 000 円→650, 000 円（増額） 規約変更せず2・3年間会計上で増額し経過判断する。</p>
                                        <p>外灯運営費・・・500, 000 円→400, 000 円（減額） 規約変更せず2・3年間会計上で減額し経過判断する。</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold">33、次期会長候補の副会長の追加について</p>
                                    <p className="pl-4">新会長を受ける条件として副会長1名の追加要望があり、初集会で承認をうけて、副会長1名を指名し、仮運用をするなかで会長の職務の軽減及び町役員の職務のあり方について検討する。 ・・・平成31年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold mb-2">34、規約の見直しについて</p>
                                    <div className="pl-4 space-y-2">
                                        <p>1）次期会長候補の副会長の追加について 前年度に仮運用された次期会長候補の副会長について、継続し規約変更する。</p>
                                        <p>2）民生委員の手当てについて 自治会長より仕事の量から考え、3千円／年から6万円／年間へ増額の提案があったが、反対意見があり継続審議となった。関連して、長年と勤められた退任民生委員への謝礼を提案し用途は本人に任せる旨を説明し、承認された。</p>
                                        <p>3）参集会館の利用料金について<br />町民利用の場合（町民5割以上） 1時間100円 1日500円<br />町民利用の場合（町民5割未満） 1時間500円 1日2000円 ・・・令和2年度覚書</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold mb-2">35、町費の変更について</p>
                                    <div className="pl-4 space-y-2">
                                        <p>1）高齢者世帯の町費減額について 同居している家族が75歳以上の名合で（だし、75歳未満の同居家族がいる場合でも、障がい者など特別な事情がある場合は、役員会で判断する。）<br />・子どもが町民で町費を支払っている場合・・・町費0円とする。<br />・本人のみ町民の場合・・・町費4800円／年とする。 （令和3年度は試行とし、対象件数など勘案し、次年度に再度審議する。）</p>
                                        <p>2）令和3年の1戸建ての町費を4800円／年とする。<br />現在の町費は、変更せず1年限りの減額とする。理由として、令和2年は、コロナウィルスの感染拡大防止の為、多くの事業を中止しましたので、その減額分を考慮しました。 ＊飯野地区分担金など一定額の支出は必要となりますので、令和3年度は、アパートを含め、4800円／年とする。</p>
                                        <p>3）町自治会消防団解散に伴い自治会規約補則第6条8項の町自治会消防手当及び、自治会規約補則第7条8項の夏祭り協賛補助金は令和3年度 0円とする。 ・・・令和3年度覚書</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold mb-2">36、町費の変更について</p>
                                    <div className="pl-4 space-y-2">
                                        <p>1）高齢者世帯の町費減額について 同居している家族が75歳以上の場合で（ただし、75歳未満の同居家族がいる場合でも、障がい者など特別な事情がある場合は、役員会で判断する。）<br />・子どもが町民で町費を支払っている場合・・・町費0円とする。<br />・本人のみ町民の場合・・・町費4800円／年とする。</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold mb-2">37、規約の見直しについて</p>
                                    <p className="pl-4 mb-2 font-bold">自治規約</p>
                                    <div className="pl-8 space-y-1 mb-2">
                                        <p>1）各条の総代を会長と明記に訂正する。</p>
                                        <p>2）農業委員の任期3年を追記する。</p>
                                        <p>3）副会長（会長補佐役・次期会長）の役務を明記する。</p>
                                    </div>
                                    <p className="pl-4 mb-2 font-bold">自治会規約補則</p>
                                    <div className="pl-8 space-y-1 mb-2">
                                        <p>1）町消防団解散に伴う手当 ・文言を削除する。第16条含む</p>
                                        <p>2）神社会計手当を 2, 000 円⇒10, 000 円に変更する。</p>
                                        <p>3）資源ごみ指導員手当 40, 000 円／人を市助成金 165, 000 円に変更する。</p>
                                        <p>4）テーブル ・椅子貸出料の項目を削除する。</p>
                                        <p>5）安楽会 65歳以上は“入会すること“を入会することが望ましいに変更する。</p>
                                        <p>6）墓地管理 他所徴収分は安楽会が請け負う清掃活動費に当てるを明記する。 ・・・令和4年度覚書</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-bold">38、規約の見直しについて 自治会規約覚書事項11 ゴミ集積所の新設 ・更新は町負担とし、修理 ・保全は各組負担とするを修繕内容により町負担にするか役員会にて決定する。 ・・・令和5年度覚書</p>
                                </div>

                                <div>
                                    <p className="font-bold mb-2">39、規約の見直し</p>
                                    <div className="pl-4 space-y-1">
                                        <p>1）自治会規約 第12条会計年度より次に掲げる会計決算は定期総会に報告、承認を得る。項目 9.に秋祭り会計を追加し報告する。（町補助金となる為）</p>
                                        <p>2）自治会規約補則 第7条各種補助金等（年間）の項目7、夏祭り協賛補助金項目を秋祭り補助金へ名称変更し、補助金額を 320, 000 円とする。</p>
                                        <p>3）第6条役員手当 （13）民生委員 ・児童委員の手当てについて 現行 3, 000 円を 10, 000 円／年に改定する。 ・・・令和6年度覚書</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="mt-12 text-center">
                        <Link href="/rules-list">
                            <Button size="lg" className="text-base px-8">
                                <ArrowLeft className="h-5 w-5 mr-2" />
                                規約一覧に戻る
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
