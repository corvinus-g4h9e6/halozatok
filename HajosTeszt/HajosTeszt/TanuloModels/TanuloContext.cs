using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace HajosTeszt.TanuloModels
{
    public partial class TanuloContext : DbContext
    {
        public TanuloContext()
        {
        }

        public TanuloContext(DbContextOptions<TanuloContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Tanuloadat> Tanuloadats { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-HL23QA1\\SQLEXPRESS;Initial Catalog=Tanulo;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Hungarian_CI_AS");

            modelBuilder.Entity<Tanuloadat>(entity =>
            {
                entity.HasKey(e => e.TanuloSk);

                entity.ToTable("Tanuloadat");

                entity.Property(e => e.TanuloSk).HasColumnName("TanuloSK");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Nev).HasMaxLength(50);

                entity.Property(e => e.SzulDatum)
                    .HasMaxLength(11)
                    .HasColumnName("Szul_Datum");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
