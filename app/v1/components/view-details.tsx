"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Clock, CheckCircle2 } from 'lucide-react'

interface ProjectModalProps {
  project: {
    name: string
    description: string
    image: string
    url: string
    tech: string[]
    fullDescription: string
    duration: number
    performance: number
    accessibility: number
    bestPractices: number
    seo: number
    metrics: {
      fcp: string
      lcp: string
      tbt: string
      cls: string
      si: string
    }
  }
  isOpen: boolean
  onClose: () => void
}

function getScoreColor(score: number): string {
  if (score >= 90) return '#0cce6b' // Green
  if (score >= 50) return '#ffa400' // Orange
  return '#ff4e42' // Red
}

function getMetricColor(metric: string, value: string): string {
  const numValue = parseFloat(value)
  switch (metric) {
    case 'fcp':
      return numValue <= 1.8 ? '#0cce6b' : numValue <= 3 ? '#ffa400' : '#ff4e42'
    case 'lcp':
      return numValue <= 2.5 ? '#0cce6b' : numValue <= 4 ? '#ffa400' : '#ff4e42'
    case 'tbt':
      return numValue <= 200 ? '#0cce6b' : numValue <= 600 ? '#ffa400' : '#ff4e42'
    case 'cls':
      return numValue <= 0.1 ? '#0cce6b' : numValue <= 0.25 ? '#ffa400' : '#ff4e42'
    case 'si':
      return numValue <= 3.4 ? '#0cce6b' : numValue <= 5.8 ? '#ffa400' : '#ff4e42'
    default:
      return '#ffffff'
  }
}

function getMetricLabel(metric: string): string {
  switch (metric) {
    case 'fcp': return 'First Contentful Paint'
    case 'lcp': return 'Largest Contentful Paint'
    case 'tbt': return 'Total Blocking Time'
    case 'cls': return 'Cumulative Layout Shift'
    case 'si': return 'Speed Index'
    default: return metric
  }
}

export function ViewDetails({ project, isOpen, onClose }: ProjectModalProps) {
  const overallPerformance = Math.round((project.performance + project.accessibility + project.bestPractices + project.seo) / 4)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto bg-black text-white border border-white/20 p-0">
        <div className="relative w-full h-48 md:h-64 lg:h-80">
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{project.name}</DialogTitle>
            <DialogDescription className="text-white/70 text-lg">{project.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3">About the Project</h3>
                <p className="text-white/70 text-lg">{project.fullDescription}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-lg py-1 px-3 text-white select-none">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3">Project Duration</h3>
                <div className="bg-white/10 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-white/70" />
                    <span className="text-lg font-medium">Completed in</span>
                  </div>
                  <span className="text-lg text-white/70">{project.duration}</span>
                </div>
              </div>
            </div>
            <div className="select-none">
              <h3 className="text-2xl font-semibold mb-6 select-none">Performance Insights</h3>
              <div className="grid grid-cols-3 gap-4">
                {['performance', 'accessibility'].map((metric) => (
                  <div key={metric} className="flex flex-col items-center">
                    <div style={{ width: '100px', height: '100px' }}>
                      <CircularProgressbar
                        value={project[metric]}
                        text={`${project[metric]}%`}
                        styles={buildStyles({
                          textSize: '22px',
                          pathColor: getScoreColor(project[metric]),
                          textColor: '#ffffff',
                          trailColor: '#ffffff1a',
                        })}
                      />
                    </div>
                    <p className="mt-2 text-sm capitalize">{metric.replace(/([A-Z])/g, ' $1').trim()}</p>
                  </div>
                ))}
                <div className="flex flex-col items-center row-span-2 col-start-2 row-start-1">
                  <div style={{ width: '140px', height: '140px' }}>
                    <CircularProgressbar
                      value={overallPerformance}
                      text={`${overallPerformance}%`}
                      styles={buildStyles({
                        textSize: '22px',
                        pathColor: getScoreColor(overallPerformance),
                        textColor: '#ffffff',
                        trailColor: '#ffffff1a',
                      })}
                    />
                  </div>
                  <p className="mt-2 text-lg font-semibold select-none">Overall</p>
                </div>
                {['bestPractices', 'seo'].map((metric) => (
                  <div key={metric} className="flex flex-col items-center">
                    <div style={{ width: '100px', height: '100px' }}>
                      <CircularProgressbar
                        value={project[metric]}
                        text={`${project[metric]}%`}
                        styles={buildStyles({
                          textSize: '22px',
                          pathColor: getScoreColor(project[metric]),
                          textColor: '#ffffff',
                          trailColor: '#ffffff1a',
                        })}
                      />
                    </div>
                    <p className="mt-2 text-sm capitalize">{metric.replace(/([A-Z])/g, ' $1').trim()}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-4">Detailed Metrics</h4>
                <div className="space-y-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-2 rounded" style={{ backgroundColor: `${getMetricColor(key, value)}20` }}>
                      <span className="text-lg font-medium" style={{ color: getMetricColor(key, value) }}>{getMetricLabel(key)}</span>
                      <span className="text-lg font-semibold" style={{ color: getMetricColor(key, value) }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}