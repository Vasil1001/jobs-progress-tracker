/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Tf7Mk19sM4R
 */
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { JSX, SVGProps } from 'react'

export function CVPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 md:gap-8 ">
        <div className="mx-auto flex w-full items-center gap-4">
          <form className="flex-1">
            <Input className="bg-white" placeholder="Search..." />
            <Button className="sr-only" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className='dark:bg-zinc-900/40 dark:hover:bg-zinc-900/60'>
            <CardHeader className="flex flex-row items-center gap-4">
              <HomeIcon className="h-8 w-8" />
              <div className="grid gap-1">
                <CardTitle>John Doe</CardTitle>
                <CardDescription>john.doe@example.com</CardDescription>
                <CardDescription>Software Engineer</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Recent Activities</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <GithubIcon className="h-4 w-4" />
                  <span className="text-gray-500 dark:text-gray-400">3h ago</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitBranchIcon className="h-4 w-4" />
                  <span className="text-gray-500 dark:text-gray-400">main</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className='dark:bg-zinc-900/40 dark:hover:bg-zinc-900/60'>
            <CardHeader className="flex flex-row items-center gap-4">
              <UploadIcon className="h-8 w-8" />
              <div className="grid gap-1">
                <CardTitle>Upload CV</CardTitle>
                <CardDescription>Select a file to upload</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">CV</Label>
                <Input id="picture" type="file" />
              </div>
              <Button className="w-full" type="submit">
                Upload
              </Button>
            </CardContent>
          </Card>
          <Card className='dark:bg-zinc-900/40 dark:hover:bg-zinc-900/60'>
            <CardHeader className="flex flex-row items-center gap-4">
              <FileIcon className="h-8 w-8" />
              <div className="grid gap-1">
                <CardTitle>Current Cover Letter</CardTitle>
                <CardDescription>Your current cover letter is available here</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Input id="coverLetter" type="file" />
              </div>
              <Button className="w-full" type="submit">
                Upload
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function FrameIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function GitBranchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  )
}

function UploadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}

function FileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}
