export class TransformHelp{
  public static trim({value}: {value: string}): string {
    return value ?value.trim():value;
  }

  public static toLowerCase (value: string): string {
    return value.toLowerCase();
  }

}