import React, { useState, useEffect } from 'react';
import { Megaphone, Shield, Target, Zap, Eye, Download, Globe, Lock, Users, AlertTriangle } from 'lucide-react';

export default function HacktivistProfile() {
  const [narrationPlaying, setNarrationPlaying] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const narrationText = [
    "Meet the Digital Justice Collective. They're not in it for money. They're in it for a cause.",
    "When MegaCorp Industries was caught dumping toxic waste into local rivers, the hacktivists took notice.",
    "Their reconnaissance began with open-source intelligence. Social media, leaked documents, employee LinkedIn profiles. They mapped the entire digital infrastructure.",
    "The attack vector? A carefully crafted spear-phishing email to a junior system administrator. The payload? A simple web shell hidden in what appeared to be an environmental report PDF.",
    "Within hours, they had access. They didn't steal data for profit. They leaked internal documents proving corporate cover-ups. They defaced the company website with evidence of environmental crimes.",
    "The impact was immediate. News outlets picked up the story. Stock prices plummeted. Government investigations launched. The hacktivists had won in the court of public opinion.",
    "But every action has consequences. Website defacement, unauthorized access, and data theft—even for noble causes—remain illegal. The question remains: where is the line between activism and crime?"
  ];

  useEffect(() => {
    let interval;
    if (narrationPlaying) {
      interval = setInterval(() => {
        setCurrentSection(prev => {
          if (prev >= narrationText.length - 1) {
            setNarrationPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 15000);
    }
    return () => clearInterval(interval);
  }, [narrationPlaying]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhhNWNmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="flex items-center gap-3 mb-6 text-purple-400">
            <Megaphone className="w-8 h-8" />
            <span className="text-sm font-mono uppercase tracking-wider">Attacker Profile</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            HACKTIVISTS
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Cyber activists who hack for political or social causes. They use their technical skills 
            to promote ideologies, protest injustices, and expose what they perceive as corruption.
          </p>

          <div className="flex gap-4 mb-12">
            <button
              onClick={() => {
                setNarrationPlaying(!narrationPlaying);
                if (!narrationPlaying) setCurrentSection(0);
              }}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
            >
              {narrationPlaying ? 'Pause' : 'Play'} Story
            </button>
          </div>

          {narrationPlaying && (
            <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 rounded-full p-2 mt-1">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-lg leading-relaxed">{narrationText[currentSection]}</p>
                  <div className="mt-4 flex gap-2">
                    {narrationText.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 flex-1 rounded ${
                          idx === currentSection ? 'bg-purple-500' : 'bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Characteristics */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: 'Motive', value: 'Political/Social Justice', icon: Target },
              { label: 'Skill Level', value: 'Moderate to High', icon: Zap },
              { label: 'Primary Goal', value: 'Publicity & Change', icon: Megaphone },
              { label: 'Legal Status', value: 'Criminal Activity', icon: AlertTriangle }
            ].map((item, idx) => (
              <div key={idx} className="bg-black/30 backdrop-blur border border-purple-500/20 rounded-lg p-4">
                <item.icon className="w-6 h-6 text-purple-400 mb-2" />
                <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                <div className="font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Motive Section */}
      <div className="bg-black/20 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-purple-400" />
            WHY: The Motive
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Political & Social Justice</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Protest government policies, corporate misconduct, or human rights violations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Expose corruption and bring transparency to hidden wrongdoing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Support causes like environmental protection, free speech, or anti-censorship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Gain publicity and public support for their ideology</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-purple-300">Target Profile</h4>
              <p className="text-gray-300 mb-4">
                <strong>WHO:</strong> Government agencies, corporations with questionable practices, 
                organizations perceived as corrupt or unethical
              </p>
              <p className="text-gray-300">
                <strong>WHAT:</strong> Websites, databases, internal communications, confidential documents
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <Zap className="w-8 h-8 text-purple-400" />
          Attack Timeline
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-500/30"></div>
          
          {[
            {
              phase: 'Phase 1: Reconnaissance',
              title: 'Intelligence Gathering',
              description: 'Hacktivists research their target using OSINT (Open Source Intelligence). They scan social media, news articles, leaked databases, and public records to identify vulnerabilities and key personnel.',
              techniques: ['Social media profiling', 'DNS enumeration', 'Employee identification', 'Technology stack analysis'],
              time: '2-4 weeks'
            },
            {
              phase: 'Phase 2: Delivery & Initial Access',
              title: 'Breach & Infiltration',
              description: 'Using spear-phishing, exploiting public-facing vulnerabilities, or leveraging stolen credentials, hacktivists gain initial access to the target network.',
              techniques: ['Spear-phishing campaigns', 'SQL injection', 'Credential stuffing', 'Exploiting unpatched systems'],
              time: '1-3 days'
            },
            {
              phase: 'Phase 3: Actions & Impact',
              title: 'Execute & Publicize',
              description: 'Hacktivists deface websites, leak confidential data, launch DDoS attacks, or disrupt services. They ensure maximum publicity through social media and press releases.',
              techniques: ['Website defacement', 'Data exfiltration', 'DDoS attacks', 'Social media campaigns'],
              time: '1-7 days'
            }
          ].map((phase, idx) => (
            <div key={idx} className="relative pl-20 pb-12 last:pb-0">
              <div className="absolute left-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-gray-900">
                {idx + 1}
              </div>
              
              <div className="bg-black/40 backdrop-blur border border-purple-500/30 rounded-lg p-6">
                <div className="text-sm text-purple-400 font-mono mb-2">{phase.phase}</div>
                <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                <p className="text-gray-300 mb-4">{phase.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-purple-300 mb-2">Common Techniques:</div>
                  <div className="flex flex-wrap gap-2">
                    {phase.techniques.map((tech, i) => (
                      <span key={i} className="bg-purple-600/20 border border-purple-500/30 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-sm text-gray-400">
                  ⏱️ Typical Duration: <span className="text-purple-300 font-semibold">{phase.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Artifacts Section */}
      <div className="bg-black/20 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Download className="w-8 h-8 text-purple-400" />
            Attack Artifacts
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Artifact 1: Manifesto */}
            <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 border-2 border-red-500/50 rounded-lg p-6 shadow-xl">
              <div className="text-xs font-mono text-red-400 mb-3">ARTIFACT #1: MANIFESTO</div>
              <h3 className="text-xl font-bold mb-4 text-red-300">Digital Justice Collective - Public Statement</h3>
              
              <div className="bg-black/60 p-4 rounded border border-red-500/30 font-mono text-sm mb-4">
                <p className="text-red-300 mb-3">► TO: The People of the World</p>
                <p className="text-gray-300 mb-3">
                  We are the Digital Justice Collective. We do not forgive corporate greed. 
                  We do not forget environmental destruction.
                </p>
                <p className="text-gray-300 mb-3">
                  MEGACORP INDUSTRIES has been dumping toxic chemicals into the Clearwater River 
                  for 3 years. Internal documents prove they knew. Executives covered it up. 
                  Profits over people.
                </p>
                <p className="text-gray-300 mb-3">
                  Today, we expose the truth. All internal communications, financial records, 
                  and environmental impact reports are now PUBLIC.
                </p>
                <p className="text-red-300 font-bold">
                  #DigitalJustice #CorporateAccountability #ExposeTheTruth
                </p>
              </div>
              
              <div className="text-xs text-gray-400">
                Posted: November 15, 2025 | Shared: 45,000+ times
              </div>
            </div>

            {/* Artifact 2: Defaced Website */}
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-2 border-purple-500/50 rounded-lg p-6 shadow-xl">
              <div className="text-xs font-mono text-purple-400 mb-3">ARTIFACT #2: WEBSITE DEFACEMENT</div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">MegaCorp Homepage (Defaced)</h3>
              
              <div className="bg-black/60 p-6 rounded border border-purple-500/30">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">⚠️</div>
                  <h1 className="text-3xl font-bold text-red-500 mb-2">SITE SEIZED</h1>
                  <p className="text-lg text-purple-300 mb-4">By Digital Justice Collective</p>
                </div>
                
                <div className="bg-red-900/30 border border-red-500/50 rounded p-4 mb-4">
                  <p className="text-sm text-gray-300 mb-2">
                    This corporation has been poisoning our water supply. The evidence is now public.
                  </p>
                  <p className="text-xs text-red-400 font-mono">
                    → Download leaked documents: [REDACTED]<br/>
                    → View internal emails: [REDACTED]<br/>
                    → See evidence timeline: [REDACTED]
                  </p>
                </div>
                
                <p className="text-xs text-center text-gray-500 italic">
                  "We are Anonymous. We are Legion. We do not forgive. We do not forget."
                </p>
              </div>
            </div>

            {/* Artifact 3: Phishing Email */}
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border-2 border-blue-500/50 rounded-lg p-6 shadow-xl">
              <div className="text-xs font-mono text-blue-400 mb-3">ARTIFACT #3: SPEAR-PHISHING EMAIL</div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">Initial Access Vector</h3>
              
              <div className="bg-black/60 p-4 rounded border border-blue-500/30 font-mono text-xs">
                <div className="mb-4 pb-3 border-b border-gray-700">
                  <p className="text-gray-400">From: compliance@epa-environmental-report.com</p>
                  <p className="text-gray-400">To: j.rodriguez@megacorp.com</p>
                  <p className="text-gray-400">Subject: URGENT - EPA Compliance Audit Q4 2025</p>
                  <p className="text-gray-400">Date: November 10, 2025 9:23 AM</p>
                </div>
                
                <div className="text-gray-300 space-y-3">
                  <p>Dear MegaCorp Facilities Manager,</p>
                  <p>
                    This is an urgent notice regarding your facility's Q4 environmental compliance audit. 
                    The EPA requires immediate review of your waste disposal procedures.
                  </p>
                  <p>
                    Please review the attached compliance checklist and submit your response within 48 hours 
                    to avoid penalties.
                  </p>
                  <p className="text-blue-400">
                    📎 EPA_Compliance_Audit_Q4_2025.pdf [MALICIOUS PAYLOAD]
                  </p>
                  <p>
                    Regards,<br/>
                    EPA Compliance Division
                  </p>
                  <p className="text-red-400 text-xs mt-4">
                    ⚠️ RED FLAGS: Urgent language, spoofed domain, suspicious attachment
                  </p>
                </div>
              </div>
            </div>

            {/* Artifact 4: Social Media Campaign */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-2 border-green-500/50 rounded-lg p-6 shadow-xl">
              <div className="text-xs font-mono text-green-400 mb-3">ARTIFACT #4: SOCIAL MEDIA CAMPAIGN</div>
              <h3 className="text-xl font-bold mb-4 text-green-300">Twitter/X Amplification</h3>
              
              <div className="space-y-3">
                <div className="bg-black/60 p-3 rounded border border-green-500/30">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold">
                      DJC
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Digital Justice Collective <span className="text-gray-500">@DigitalJusticeC</span></p>
                      <p className="text-sm text-gray-400">2h ago</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">
                    🚨 BREAKING: MegaCorp caught dumping toxic waste. Internal docs prove 3-year cover-up. 
                    Thread with evidence below. #CorporateCorruption #EnvironmentalCrime
                  </p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>💬 2.3K</span>
                    <span>🔁 15.8K</span>
                    <span>❤️ 28.4K</span>
                  </div>
                </div>

                <div className="bg-black/60 p-3 rounded border border-green-500/30">
                  <p className="text-xs text-gray-400 mb-2">Trending in United States</p>
                  <p className="font-bold text-green-300">#MegaCorpLeaks</p>
                  <p className="text-sm text-gray-400">127K posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-purple-400" />
          SO WHAT: The Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Reputational Damage',
              icon: Globe,
              description: 'Public embarrassment, loss of customer trust, and brand damage that can take years to repair.',
              metrics: ['Stock price drops', 'Customer exodus', 'Media scrutiny']
            },
            {
              title: 'Operational Disruption',
              icon: Zap,
              description: 'Website downtime, service interruptions, and system recovery costs drain resources and productivity.',
              metrics: ['Hours of downtime', 'Recovery expenses', 'Lost revenue']
            },
            {
              title: 'Legal & Regulatory',
              icon: Lock,
              description: 'Data breaches trigger investigations, lawsuits, and compliance penalties from regulatory bodies.',
              metrics: ['Government probes', 'Class action suits', 'GDPR fines']
            }
          ].map((impact, idx) => (
            <div key={idx} className="bg-black/40 backdrop-blur border border-purple-500/30 rounded-lg p-6">
              <impact.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
              <p className="text-gray-300 mb-4">{impact.description}</p>
              <div className="space-y-1">
                {impact.metrics.map((metric, i) => (
                  <div key={i} className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Defender Countermeasures */}
      <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Shield className="w-8 h-8 text-green-400" />
            Defender's Countermeasures
          </h2>

          <div className="bg-black/40 backdrop-blur border-2 border-green-500/50 rounded-lg p-8">
            <p className="text-lg text-gray-300 mb-8">
              Organizations can protect themselves from hacktivist attacks by implementing these security measures:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Security Awareness Training',
                  description: 'Train employees to recognize spear-phishing attempts, suspicious emails, and social engineering tactics. Regular phishing simulations help build resilience.',
                  priority: 'Critical'
                },
                {
                  title: 'Web Application Firewall (WAF)',
                  description: 'Deploy WAF to protect against SQL injection, DDoS attacks, and other web-based exploits. Monitor traffic patterns for anomalies.',
                  priority: 'High'
                },
                {
                  title: 'Patch Management & Updates',
                  description: 'Maintain a rigorous patch management program. Hacktivists often exploit known vulnerabilities in outdated systems.',
                  priority: 'Critical'
                },
                {
                  title: 'Access Control & MFA',
                  description: 'Implement multi-factor authentication for all accounts, especially privileged users. Apply principle of least privilege to limit lateral movement.',
                  priority: 'Critical'
                },
                {
                  title: 'Incident Response Plan',
                  description: 'Develop and test an incident response plan specifically for defacement, data leaks, and DDoS scenarios. Practice rapid restoration procedures.',
                  priority: 'High'
                },
                {
                  title: 'Threat Intelligence Monitoring',
                  description: 'Monitor dark web forums, social media, and hacktivist channels for threats against your organization. Early warning enables proactive defense.',
                  priority: 'Medium'
                }
              ].map((measure, idx) => (
                <div key={idx} className="bg-green-900/20 border border-green-500/30 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-green-300">{measure.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      measure.priority === 'Critical' ? 'bg-red-600/30 text-red-300' :
                      measure.priority === 'High' ? 'bg-orange-600/30 text-orange-300' :
                      'bg-yellow-600/30 text-yellow-300'
                    }`}>
                      {measure.priority}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{measure.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-yellow-300 mb-2">Key Takeaway</h3>
                <p className="text-gray-300">
                  While hacktivists may have ideological motives rather than financial goals, their attacks are 
                  still illegal and can cause significant damage. A strong security posture combining technical 
                  controls, employee awareness, and rapid incident response is essential for defense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black/40 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p className="mb-2">
            This is an educational resource demonstrating hacktivist attack patterns and defenses.
          </p>
          <p>
            All scenarios, organizations, and data are fictional. Created with ethical, dummy content only.
          </p>
        </div>
      </div>
    </div>
  );
}