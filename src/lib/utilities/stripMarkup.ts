export function stripMarkup(str: string): string | string[] {
  if (str.includes('<br/>')) {
    return str.split('<br/>').map((s) => stripMarkup(s)) as string[]
  }
  
  if (str.includes('</span>')) {
    return str.split('</span>')[1].trim();
  }

  return str;
}
