import { SiteHeader } from "@/components/site-header";
import { ContactBar } from "@/components/contact-bar";
import { CopyButton } from "@/components/copy-button";
import { events } from "@/data/events";
import { highlights } from "@/data/highlights";
import { services } from "@/data/services";
import { cooperationFlows } from "@/data/process";
import { companyIntro, strengths } from "@/data/brand";
import { faqs } from "@/data/faq";
import { prizes } from "@/data/prizes";
import { ADDRESS, HOTLINE, WECHAT_ID, COPYRIGHT } from "@/data/contact";

export default function Home() {
  const completedEvents = events.filter((event) => event.status === "completed");
  const upcomingEvent = events.find((event) => event.status === "upcoming");

  return (
    <div className="text-sm leading-relaxed text-white">
      <SiteHeader />
      <ContactBar />

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-28 pt-12 lg:pb-16" id="hero">
        <section className="border-overlay overflow-hidden px-6 py-10 lg:px-12" id="hero">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <p className="text-brand-gold text-sm tracking-[0.3em] uppercase">YES BILLIARDS</p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-white lg:text-4xl">
                耶氏赛事运营中心<span className="block text-base text-brand-gold">耶氏台球，独享台球的快乐</span>
              </h1>
              <p className="mt-6 text-base text-white/80">
                面向赞助商与球房的专业赛事品牌网站，展示耶氏黄金八系列站点、运营能力与合作方案，
                以数据和案例帮助您快速决策，共同打造高质量台球赛事。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${HOTLINE}`}
                  className="flex-1 min-w-[180px] rounded-full bg-brand-gold py-3 text-center text-base font-semibold text-brand-navy transition hover:opacity-90"
                >
                  拨打热线 {HOTLINE}
                </a>
                <CopyButton
                  label={`复制微信号 ${WECHAT_ID}`}
                  value={WECHAT_ID}
                  className="flex-1 min-w-[180px] text-base"
                />
              </div>
            </div>

            <div className="relative lg:w-1/2">
              <div className="border-overlay overflow-hidden">
                <video
                  className="aspect-video w-full"
                  src="/videos/hero.mp4"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                >
                  您的浏览器暂不支持视频播放。
                </video>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="border-overlay px-6 py-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-2xl font-semibold text-white lg:w-1/3">赛事亮点速览</h2>
            <p className="text-white/70 lg:w-2/3">
              耶氏团队以全产业链能力支持赛事策划、宣发与执行，当前赛季在昆明核心商圈布局五大站点，
              通过专业直播与战报内容为品牌与球房提供持续曝光与转化。
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6">
                <p className="text-xs uppercase tracking-widest text-brand-gold/80">{item.title}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-3 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-brand-gold/20 bg-brand-gold/10 px-4 py-5 text-sm text-brand-gold">
            <span className="rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold/90">
              直播平台
            </span>
            <span className="text-brand-gold">抖音 · 云南耶氏体育文化发展有限公司</span>
            <span className="text-brand-gold/80">赛事全程支持直播/录播及赛报内容输出</span>
          </div>
        </section>

        <section id="services" className="border-overlay px-6 py-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-semibold text-white">一站式赛事运营服务</h2>
              <p className="mt-3 text-white/70">
                从方案制定到现场执行与赛后复盘，耶氏提供覆盖赛事全生命周期的运营支持。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:w-2/3">
              {services.map((service) => (
                <div key={service.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="border-overlay px-6 py-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">历届站点战报</h2>
              <p className="mt-3 text-white/70">
                2025赛季耶氏黄金八系列已完成四站，持续收获会员与合作门店好评。
              </p>
            </div>
            {upcomingEvent && (
              <div className="rounded-2xl border border-brand-gold/30 bg-brand-gold/10 px-4 py-3 text-brand-gold">
                <p className="text-xs uppercase tracking-[0.3em]">Upcoming</p>
                <p className="mt-1 text-sm">{upcomingEvent.name} · {upcomingEvent.dateRange}</p>
              </div>
            )}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {completedEvents.map((event) => (
              <article key={event.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white">{event.name}</h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                    {event.dateRange}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/60">{event.location}</p>
                <p className="mt-4 text-sm text-white/80">{event.highlight}</p>

                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  {event.players.map((player) => (
                    <li
                      key={`${event.id}-${player.rank}`}
                      className="rounded-xl border border-white/10 bg-brand-navy/40 px-4 py-3"
                    >
                      <p className="text-xs text-brand-gold/80">{player.rank}</p>
                      <p className="mt-1 text-base font-semibold text-white">{player.name}</p>
                    </li>
                  ))}
                </ul>

                {event.media?.video && (
                  <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                    <video
                      className="aspect-video w-full"
                      src={event.media.video}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                    >
                      您的浏览器暂不支持视频播放。
                    </video>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="overview-details" className="border-overlay px-6 py-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">本场赛事资讯</h2>
              <dl className="mt-6 space-y-4 text-sm text-white/80">
                <div>
                  <dt className="text-brand-gold">比赛时间</dt>
                  <dd className="mt-1">2025年8月28日—31日 · 预选赛 28-29 日 · 正赛 30-31 日</dd>
                </div>
                <div>
                  <dt className="text-brand-gold">比赛地点</dt>
                  <dd className="mt-1">昆明市呈贡区古银路华联超市对面2楼呈贡广场加盟店</dd>
                </div>
                <div>
                  <dt className="text-brand-gold">参赛资格</dt>
                  <dd className="mt-1">
                    耶氏会员积分200分以上，昆明档位低于4档（不含4档）。赛事组保留现场抽查、调档与取消资格权利。
                  </dd>
                </div>
                <div>
                  <dt className="text-brand-gold">报名方式</dt>
                  <dd className="mt-1">
                    报名费50元，负方现场结算台费（不打折、不刷卡）。开赛后10分钟未到判负一局，30分钟未到视为弃权。
                  </dd>
                </div>
                <div>
                  <dt className="text-brand-gold">直播与授权</dt>
                  <dd className="mt-1">
                    参赛即同意赛事方直播/录播/摄影，并在宣传中使用选手姓名、肖像、影像与战绩信息。
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">奖励设置</h3>
              <ul className="mt-4 space-y-3">
                {prizes.map((prize) => (
                  <li
                    key={prize.rank}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-brand-navy/30 px-4 py-3"
                  >
                    <span className="text-sm text-brand-gold">{prize.rank}</span>
                    <span className="text-sm text-white/80">{prize.reward}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-brand-gold/30 bg-brand-gold/10 p-4 text-sm text-brand-gold">
                赛制：预选赛单败、正赛双败；全程采用“耶氏黄金八”赛制与弹性让球规则。
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-white">常见问题</h3>
            <div className="mt-4 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <summary className="cursor-pointer text-sm font-medium text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="brand" className="border-overlay px-6 py-8 lg:px-12">
          <h2 className="text-2xl font-semibold text-white">品牌与团队</h2>
          <p className="mt-3 text-white/70">{companyIntro.description}</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">核心优势</h3>
              <ul className="mt-4 space-y-4 text-sm text-white/80">
                {companyIntro.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-brand-gold" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 p-6 text-brand-gold">
              <p className="text-xs uppercase tracking-[0.3em]">Headquarters</p>
              <p className="mt-3 text-base font-semibold">{companyIntro.headquarters}</p>
              <p className="mt-4 text-sm text-brand-gold/80">
                21家合作门店覆盖昆明五区、安宁与玉溪澄江，持续拓展区域赛事版图。
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-brand-navy/40 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">发展历程</h3>
            <ul className="mt-4 space-y-4">
              {companyIntro.timeline.map((item) => (
                <li key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs text-brand-gold">
                      {item.year}
                    </span>
                    <span className="mt-2 h-full w-px bg-brand-gold/20" />
                  </div>
                  <p className="text-sm text-white/70">{item.event}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="partners" className="border-overlay px-6 py-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-semibold text-white">合作方案</h2>
              <p className="mt-3 text-white/70">
                赞助商与球房均可通过耶氏赛事获得精准客群触达与品牌增值，以下流程帮助您了解合作方式。
              </p>
            </div>
            <div className="grid gap-6 lg:w-2/3 lg:grid-cols-2">
              {cooperationFlows.map((flow) => (
                <div key={flow.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-lg font-semibold text-white">{flow.name}</h3>
                  <ol className="mt-4 space-y-4 text-sm text-white/70">
                    {flow.steps.map((step, index) => (
                      <li key={step.title} className="flex gap-3">
                        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-gold/20 text-xs font-semibold text-brand-gold">
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-medium text-white">{step.title}</p>
                          <p className="mt-1 text-white/70">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-brand-gold/30 bg-brand-gold/10 p-6 text-sm text-brand-gold">
            <p className="font-semibold text-brand-gold">正在招募赛事合作伙伴</p>
            <p className="mt-2 text-brand-gold/80">
              支持定制化站点冠名、线下品牌快闪、会员积分联动及专属内容制作，欢迎咨询了解权益组合。
            </p>
          </div>
        </section>

        <section id="contact" className="border-overlay px-6 py-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">联系我们</h2>
              <p className="mt-3 text-white/70">欢迎赞助商与球房老板来电/添加微信洽谈合作。</p>

              <div className="mt-6 space-y-4 text-sm text-white/80">
                <div>
                  <p className="text-brand-gold">热线</p>
                  <a href={`tel:${HOTLINE}`} className="mt-1 block text-lg font-semibold text-white">
                    {HOTLINE}
                  </a>
                </div>
                <div>
                  <p className="text-brand-gold">微信号</p>
                  <p className="mt-1 text-lg font-semibold text-white">{WECHAT_ID}</p>
                  <p className="mt-2 text-sm text-white/60">复制微信号即可快速添加洽谈。</p>
                </div>
                <div>
                  <p className="text-brand-gold">总部地址</p>
                  <p className="mt-1 text-sm text-white/70">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/70">
                想获取完整合作方案或赛事物料案例？欢迎联系我们，我们将根据您的品牌或门店需求迅速提供定制提案。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${HOTLINE}`}
                  className="flex-1 rounded-full bg-brand-gold py-3 text-center text-base font-semibold text-brand-navy transition hover:opacity-90"
                >
                  拨打热线
                </a>
                <CopyButton
                  label="复制微信号"
                  value={WECHAT_ID}
                  className="flex-1 text-base"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30 py-8 text-center text-xs text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4">
          <p>主办单位：云南耶氏体育用品制造有限公司</p>
          <p>冠名品牌：湘潭铺子枸杞槟榔 | 赞助商：耶氏台球斗南销售中心、煌巢酒业有限公司、申天堂球桌、元尘球杆、绅羊巧克、FKT球杆</p>
          <p>{COPYRIGHT}</p>
        </div>
      </footer>
    </div>
  );
}
